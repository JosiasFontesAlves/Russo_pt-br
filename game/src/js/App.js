import { getEntries, getRandomItem, getValues, selek, selekFn, seleKlass } from './lib7.js';
import russo_ptbr from './dicionário.js';
import Pergunta from './components/Pergunta.js';
import resultado from './resultado.js';

export default () => {
    let ctrl = 0, pt, ru;
    const respostas = [], Barr = seleKlass('barr');
    const search = getValues(russo_ptbr).flatMap(trads => getEntries(trads));

    const init = () => {
        [pt, ru] = getRandomItem(search);

        Pergunta(ru);
    }

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

            ctrl < 2 ? init() : resultado(respostas);
        }
    });
}