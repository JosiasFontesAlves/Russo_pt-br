import { getEntries, httpPost, insertChilds, mapValues, render, selek, selekFn, seleKlass, Tabela } from './lib7.js';
import dicionário from './dicionário.js';

export default () => {
    const dsk = [], respostas = [];
    let num = 0, pt, ru;

    mapValues(dicionário, trads => dsk.push(...getEntries(trads)));

    function init() {
        [pt, ru] = dsk[Math.floor(Math.random() * dsk.length)];

        selek('pergunta').innerHTML = '';

        insertChilds('#pergunta', ['Qual é o significado de ', render({ b: { id: 'res' } }, ru), ' em russo?']);
    }

    function resultado() {
        selek('root').innerHTML = '';

        insertChilds('#root', [
            render('h3', 'Fim de Jogo!'),
            Tabela('respostas', respostas),
            render({ button: { id: 'reload' } }, 'Jogar novamente')
        ]);

        selekFn('reload', 'click', () => location.reload());
    }

    selekFn('btn-ok', 'click', () => {
        const txt = selek('txt'),
            str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase()),
            barr = seleKlass('barr');

        if (txt.value !== '') {
            respostas.push({
                Russo: ru,
                Português: pt,
                Resposta: str
            });

            barr[num++].style.background = (str === pt) ? 'green' : 'red';

            (num < 5) ? init() : resultado();

            txt.value = '';

            httpPost('res', respostas);
        }
    });

    init();
}