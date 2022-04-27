import { addClass, AJAX, getEntries, getRandomItem, getValues, replacer, selek, selekFn, seleKlass, toggle } from './lib7.js';
import russo_ptbr from './russo.js';
import setResultado from './setResultado.js';
import setTema from './setTema.js';

let ctrl = 0, pt, ru;

const init = () => {
    [pt, ru] = getRandomItem(getValues(russo_ptbr).flatMap(trads => getEntries(trads)));

    replacer({ '#resposta': ru });
}

const setRespostas = (api, respostas) => {
    const resposta = selek('#txt-search'), barr = seleKlass('barr');

    if (resposta.value !== '') {
        const str = resposta.value.replace(resposta.value[0], resposta.value[0].toUpperCase());

        respostas.push({
            Português: pt, Russo: ru,
            Resposta: resposta.value
        });

        barr[ctrl++].style.background = (str === pt) ? 'green' : 'red';

        resposta.value = '';

        ctrl < 5 ? init() : setResultado(api, respostas);
    }
}

const setFn = (api, target) => {
    const respostas = [];

    const fn = {
        burger: () => toggle({ '#menu-lateral': 'show_menu' }),
        search: () => setRespostas(api, respostas)
    };

    if (target.className.includes('fn'))
        fn[target.className.match(/[b|s][u|e]\w+/)]();
}

export default () => {
    addClass({
        '.btn_burger': ['fn']
    });

    AJAX('api.json', api => {
        setTema(api);

        init();

        selekFn('body', 'click', ({ target }) => setFn(api, target));
    });
}