import { mapEntries, render, Span, Title } from '../lib7.js';
import russo from '../russo.js';

const Trad = (pt, ru) =>
    render({
        p: {
            className: 'padd7 subl_nardo trads'
        }
    }, [
        Span(pt, { className: 'pt' }),
        Span(ru, { className: 'ru' })
    ]);

export default render({
    section: {
        className: 'grid',
        id: 'container'
    }
}, mapEntries(russo, ([letra, trads]) =>
    render({
        div: {
            className: 'blocos brd_nardo bs_neon3 padd7'
        }
    }, [
        Title(2, letra, { className: 'letra' }),
        ...mapEntries(trads, ([pt, ru]) => Trad(pt, ru))
    ]))
);