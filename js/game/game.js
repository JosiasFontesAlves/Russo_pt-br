import { render, selek, selekFn, seleKlass, texto } from "../lib7.js";
import { dicionário } from "../dicionário.js";

const game = [];
for (let inicial in dicionário) {
    for (let palavra in dicionário[inicial]) game.push([dicionário[inicial][palavra], palavra]); // injeta todas as palavras do dicionário dentro de um array
}

let res;
let ctrl = 0;

init();

function init() {
    res = game[Math.floor(Math.random() * game.length)];

    texto({ id: 'pergunta', texto: `Qual é o significado de ${render({ b: { id: 'trad' } }, res[0])} em russo?` });
}


selekFn('ok', 'click', () => {
    const txt = selek('txt');

    ctrl != 5
        ? selek(`ponto_${ctrl++}`).style.background = txt.value != res[1] ? 'red' : 'green'
        : [...seleKlass('pontos')].forEach(ponto => ponto.style.background = 'var(--nardoGray)');

    txt.value = '';

    init();
});
