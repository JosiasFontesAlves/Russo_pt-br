import { render, selek, selekFn, seleKlass } from "../lib7.js";
import dicionário from "../dicionário.js";

export default () => {
    const game = [];

    for (let inicial in dicionário) { // injeta todas as palavras do dicionário dentro de um array
        Object.entries(dicionário[inicial]).map(([ru, pt]) => game.push([pt, ru]));
    }

    let res, ctrl = 0;

    init();

    function init() {
        res = game[Math.floor(Math.random() * game.length)];

        const pergunta = selek('pergunta');
        pergunta.innerHTML = '';
        pergunta.append('Qual é o significado de ', render({ b: { id: 'trad ' } }, res[0]), ' em russo?');
    }

    function result() {
        [...seleKlass('pontos')].forEach(({ style }) => style.background = 'var(--nardoGray)');

        ctrl = 0;
    }

    selekFn('ok', 'click', () => {
        const txt = selek('txt');

        res[2] = txt.value;

        ctrl <= 4 ? (selek(`ponto_${ctrl++}`).style.background = (txt.value != res[1]) ? 'red' : 'green', init()) : result();

        txt.value = '';
    });
}