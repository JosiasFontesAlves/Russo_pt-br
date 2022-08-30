import { getEntries, getValues, render, Span } from '../lib7.js';
import russo from '../russo.js';

const getTrad = getValues(russo)
    .flatMap(trads => getEntries(trads))
    .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

export default (/**@type {string} */ txt) =>
    render({
        p: {
            className: 'blur2 br7 brd_nardo padd7 w70',
            id: 'res'
        }
    }, [
        Span(`${txt} - ${getTrad[txt] ?? 'Ainda não temos essa palavra no dicionário'}`, { id: 'resposta' 
    }),
        render({
            button: {
                className: 'br7',
                id: 'btn-res'
            }
        }, 'X')
    ]);