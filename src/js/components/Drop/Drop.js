import { LinkBar, render } from '../../lib7.js';
import lista_drop from '../../lista_drop.js';
import Temesc from './Temesc.js';

export default render({
    section: {
        className: 'blur2 bs_neon2 drop_hidden fix grid',
        id: 'drop'
    }
}, [
    LinkBar(lista_drop, {
        className: 'grid'
    }, {
        className: 'hover_float padd3'
    }),
    Temesc
]);