import { render, selek, selekFn, texto } from "../lib7.js";
import { dicionário } from "../dicionário.js";

const game = [];
for (let inicial in dicionário) {
    for (let palavra in dicionário[inicial]) game.push([dicionário[inicial][palavra], palavra]); // injeta todas as palavras do dicionário dentro de um array
} 

let res;

//init();

function init() {
    res = game[Math.floor(Math.random() * game.length)];

    texto({ id: 'pergunta', texto: `Qual é o significado de ${render({ b: { id: 'trad' } }, res[0])} em russo?` });
}

/*
    selekFn('ok', 'click', () => {
        const txt = selek('txt');

        init();

        txt.value = '';
    });
*/