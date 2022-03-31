import { render, Tabela } from '../lib7.js';
import russo from '../russo.js';

const $num = [
    'Zero', 'Um', 'Dois', 'Três', 
    'Quatro', 'Cinco', 'Seis', 
    'Sete', 'Oito', 'Nove', 'Dez'
].map((n, i) => ({
    Número: i,
    Russo: russo[n[0]][n]
}));

export default render('div', Tabela('tab-num', $num));