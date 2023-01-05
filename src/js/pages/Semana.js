import russo from '../russo.js';
import { mapValues, render, Span } from '../lib7.js';

const DiaSem = (/** @type {string} */ dia) =>
    render({
        p: {
            className: 'diaSem padd10 subl_nardo w50'
        }
    }, [
        Span(dia, { className: 'pt' }),
        Span(russo[dia[0].toUpperCase()][dia], { className: 'ru' })
    ]);

export default render({
    section: {
        id: 'semana'
    }
}, mapValues([
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
], dia => DiaSem(dia)));