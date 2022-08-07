import { Btn, Img, render, Span } from '../lib7.js';

export default render({
    footer: {
        className: 'fix grid w100'
    }
}, [
    render({
        section: {
            className: 'fix flex',
            id: 'temesc'
        }
    }, [
        Img('img/lua.png', 'lua', { width: 30 }),
        Btn('btn-temesc', 3, 'blue', { height: 20, width: 20 })
    ]), 
    Span('Matsa © 2022', { id: 'copyright' })
]);