import { insertChilds, render, selek, Span } from '../lib7.js';

export default (/** @type {string} */ ru) => {
    selek('#pergunta').innerHTML = '';

    insertChilds('#pergunta', [
        Span('Qual é o significado de '),
        render('b', ru), Span(' Em russo?')
    ]);
};