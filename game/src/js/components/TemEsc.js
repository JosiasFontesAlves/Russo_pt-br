import { Btn, Img, render } from '../lib7.js';

export default render({
    section: {
        class: 'fix flex',
        id: 'temesc'
    }
}, [
    Img('img/lua.png', 'lua', { width: 30 }),
    Btn('btn-temesc', 3, 'blue', { height: 20, width: 20 })
]);