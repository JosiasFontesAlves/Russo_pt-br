import { mapEntries, render, Title } from '../lib7.js';
import russo from '../russo.js';
import Trad from './Trad.js';

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