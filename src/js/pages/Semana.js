import russo from '../russo.js';
import { render } from '../lib7.js';

export default render({
    section: {
        id: 'semana'
    }
}, [
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
].map((dia, i) =>
    render({
        p: {
            id: `dia_${i}`, className: 'diaSem padd10'
        }
    }, `${dia} - ${russo[dia[0].toUpperCase()][dia]}`))
);