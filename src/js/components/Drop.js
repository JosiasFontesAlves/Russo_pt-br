import { Btn, Img, LinkBar, render, toggle } from '../lib7.js';
import lista_drop from '../lista_drop.js';

const setTheme = () => toggle({ body: 'temesc', '#btn-temesc': 'x30' });

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
        Btn({
            id: 'btn-temesc',
            className: 'br50',
            onclick: setTheme
        }, {
            className: 'br15 bs_neon2',
            id: 'container-btn-temesc'
        })
    ])
]);