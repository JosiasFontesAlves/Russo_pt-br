import { consumirAPI, getEntries, getRandomItem, getValues, menuLateral, selek, selekFn, seleKlass } from './lib7.js';
import russo_ptbr from './russo.js';
import Pergunta from './components/Pergunta.js';
import setResultado from './setResultado.js';
import setTema from './setTema.js';

export default () => consumirAPI('api.json', api => {
    let ctrl = 0, pt, ru;
    const respostas = [];

    const init = () => {
        [pt, ru] = getRandomItem(getValues(russo_ptbr).flatMap(trads => getEntries(trads)));

        Pergunta(ru);
    }

    setTema(api);

    init();

    selekFn('#btn-search', 'click', () => {
        const resposta = selek('#txt-search');
    
        if (resposta.value !== '') {
            const str = resposta.value.replace(resposta.value[0], resposta.value[0].toUpperCase());
            
            respostas.push({
                Português: pt, Russo: ru,
                Resposta: resposta.value
            });

            seleKlass('barr')[ctrl++].style.background = (str === pt) ? 'green' : 'red';

            resposta.value = '';

            ctrl < 5 ? init() : setResultado(api, respostas);
        }
    });

    menuLateral('#menu-lateral', 'burger', 'show_menu');
});