import { consumirAPI, getEntries, httpPost, insertChilds, mapValues, render, selek, selekFn, seleKlass } from './lib7.js';
import dicionário from './dicionário.js';
import Resultado from './components/Resultado.js';
import { res } from './template.js';

const limpar = (/** @type {string} */ id) => selek(`#${id}`).innerHTML = '';

export default () => consumirAPI('api.json', api => {
    const dsk = [], respostas = [];
    let num = 0, pt, ru;

    mapValues(dicionário, trads => dsk.push(...getEntries(trads)));

    const init = () => {
        limpar('pergunta');

        [pt, ru] = dsk[Math.floor(Math.random() * dsk.length)];

        insertChilds('#pergunta', ['Qual é o significado de ', render(res, ru), ' em russo?']);
    }

    const resultado = () => {
        const data = new Date(), rlg = [data.getHours(), data.getMinutes()];

        limpar('root');

        insertChilds('#root', Resultado(respostas));

        api.respostas[`${data.toLocaleDateString()} - ${rlg.join(':')}`] = respostas;
        
        httpPost('api', api);

        selekFn('#reload', 'click', () => location.reload());
    }

    selekFn('#btn-ok', 'click', () => {
        const txt = selek('#txt');

        if (txt.value !== '') {
            const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase()),
                barr = seleKlass('barr');

            respostas.push({
                Russo: ru,
                Português: pt,
                Resposta: str
            });

            barr[num++].style.background = (str === pt) ? 'green' : 'red';

            (num < 5) ? init() : resultado();

            txt.value = '';
        }
    });

    init();
});