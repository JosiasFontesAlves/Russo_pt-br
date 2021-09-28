import { render, selek, selekFn, seleKlass, texto } from "../lib7.js";
import dicionário from "../dicionário.js";

export default () => {
    const game = [];

    for (let inicial in dicionário) { // injeta todas as palavras do dicionário dentro de um array
        for (let palavra in dicionário[inicial]) game.push([dicionário[inicial][palavra], palavra]);
    }

    let res, ctrl = 0;

    init();

    function init() {
        res = game[Math.floor(Math.random() * game.length)];

        texto({ id: 'pergunta', texto: `Qual é o significado de ${render({ b: { id: 'trad' } }, res[0])} em russo?` });
    }

    function result() {
        [...seleKlass('pontos')].forEach(ponto => ponto.style.background = 'var(--nardoGray)');

        ctrl = 0;
    }

    selekFn('ok', 'click', () => {
        const txt = selek('txt');

        res[2] = txt.value;

        ctrl != 4 ? (selek(`ponto_${ctrl++}`).style.background = txt.value != res[1] ? 'red' : 'green', init()) : result();

        txt.value = '';
    });
}