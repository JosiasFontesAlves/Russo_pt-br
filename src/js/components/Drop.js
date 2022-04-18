import { Btn, Img, LinkBar, render } from '../lib7.js';
import { drop, lista_drop, props_linkBarr, temesc } from '../template.js';

export default render(drop, [
    LinkBar(lista_drop, ...props_linkBarr),
    render(temesc, [
        Img('./img/lua.png', 'lua', { width: 30 }),
        Btn('btn-temesc', 4, 'blue', { height: 20, width: 20 })
    ])
]);