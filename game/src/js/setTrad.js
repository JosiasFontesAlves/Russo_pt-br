import { insertChilds, render } from "./lib7.js";

export default res => insertChilds('#pergunta', [
    'Qual é o significado de ',
    render({ b: { id: 'trad' } }, res),
    ' em russo?'
]);