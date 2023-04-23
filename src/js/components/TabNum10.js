import { mapValues, render, Table } from '../lib7.js';
import russo from '../russo.js';

const $num = mapValues([
    'Zero', 'Um', 'Dois', 'Três',
    'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez'
], (num, i) => ({
    Número: String(i),
    Russo: russo[num[0]][num]
}));

export default render('div', Table($num, { id: 'tab-num' }));