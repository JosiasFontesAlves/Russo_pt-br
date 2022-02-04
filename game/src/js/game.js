import { insertChilds, render, selek, selekFn, seleKlass, Tabela } from './lib7.js';
import dicionário from './dicionário.js';
import setRes from './setRes.js';

export default () => {
    const dsk = [], respostas = [];
    let num = 0, pt, ru;

    Object.values(dicionário).forEach(trads => {
        dsk.push(...Object.entries(trads))
    });

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
    }

    init();

    selekFn('btn-ok', 'click', () => {
        const txt = selek('txt');
        const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());
        const barr = seleKlass('barr');

        if (txt.value !== '') {
            respostas.push({
                Russo: ru,
                Português: pt,
                Resposta: str
            });

            setRes(respostas);

            barr[num++].style.background = (str === pt) ? 'green' : 'red';

            (num < 5) ? init() : resultado();

            txt.value = '';
        }
    });
}