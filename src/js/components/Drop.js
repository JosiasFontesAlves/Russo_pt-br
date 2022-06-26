import { Btn, Img, LinkBar, render } from '../lib7.js';
import lista_drop from '../lista_drop.js';

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
    render({
        section: {
            className: 'flex',
            id: 'temesc'
        }
    }, [
        Img('./img/lua.png', 'lua', { width: 30 }),
        Btn('btn-temesc', 4, 'blue', { height: 20, width: 20 })
    ])
]);