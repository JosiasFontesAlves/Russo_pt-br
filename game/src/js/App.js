import { addClass, consumirAPI, getEntries, getRandomItem, getValues, httpPost, mapEntries, selek, selekFn, seleKlass, temEsc, toggle } from './lib7.js';
import russo_ptbr from './dicionário.js';
import Pergunta from './components/Pergunta.js';
import resultado from './resultado.js';

export default () => consumirAPI('api.json', api => {
    let ctrl = 0, pt, ru;
    const setAPI = () => httpPost('/api', api);
    const respostas = [], Barr = seleKlass('barr');
    const search = getValues(russo_ptbr).flatMap(trads => getEntries(trads));

    if (api.temEsc) mapEntries({
        temesc: 'body',
        x30: '#btn-temesc'
    }, ([classe, el]) => addClass(el, [classe]));


    const init = () => {
        [pt, ru] = getRandomItem(search);

        Pergunta(ru);
    }

    temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
        api.temEsc = toggle(`#${target.id}`, 'x30');

        setAPI();
    });

    init();

    selekFn('#btn-search', 'click', () => {
        const resposta = selek('#txt-search');
        const str = resposta.value.replace(resposta.value[0], resposta.value[0].toUpperCase());

        if (resposta.value !== '') {
            respostas.push({
                Português: pt, Russo: ru,
                Resposta: resposta.value
            });

            Barr[ctrl++].style.background = (str === pt) ? 'green' : 'red';

            resposta.value = '';

            ctrl < 5 ? init() : resultado(respostas);
        }
    });
});