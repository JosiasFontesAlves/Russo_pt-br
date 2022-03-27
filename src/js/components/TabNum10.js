import { render, Tabela } from '../lib7.js';
import dicionário from '../dicionário.js';

const $num = [
    'Zero', 'Um', 'Dois', 'Três', 
    'Quatro', 'Cinco', 'Seis', 
    'Sete', 'Oito', 'Nove', 'Dez'
].map((n, i) => ({
    Número: i,
    Russo: dicionário[n[0]][n]
}));

export default render('div', Tabela('tab-num', $num));