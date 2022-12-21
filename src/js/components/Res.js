import { reduceEntries, render, Span } from '../lib7.js';
import russo from '../russo.js';

const getTrad = reduceEntries(russo, (acc, [, trad]) => ({
    ...acc, 
    ...trad
}), {});

export default (/**@type {string} */ txt) =>
    render({
        p: {
            className: 'blur2 br7 brd_nardo padd7 w70',
            id: 'res'
        }
    }, [
        Span(`${txt} - ${getTrad[txt] ?? 'Ainda não temos essa palavra no dicionário'}`, { id: 'resposta' }),
        render({
            button: {
                className: 'br7',
                id: 'btn-res'
            }
        }, 'X')
    ]);