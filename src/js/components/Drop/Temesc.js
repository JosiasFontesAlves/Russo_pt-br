import { Btn, Img, render, toggle } from '../../lib7.js';

const setTheme = () => toggle({ body: 'temesc', '#btn-temesc': 'x30' });

export default render({
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
]);