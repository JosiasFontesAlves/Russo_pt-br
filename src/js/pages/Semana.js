import russo from '../russo.js';
import { mapValues, render } from '../lib7.js';
import Trad from '../components/Trad.js';

export default render({
    section: {
        id: 'semana'
    }
}, mapValues([
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
], dia =>
    Trad(dia, russo[dia[0]][dia], ['diaSem', 'padd10', 'w50'])
));