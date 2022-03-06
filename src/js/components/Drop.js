import { Btn, LinkBar, render } from "../lib7.js";
import { drop, lista_drop, lua, temesc } from "../template.js";

export default render(drop, [
    LinkBar(lista_drop, {
        propsNav: { class: 'grid' },
        propsChilds: { class: 'padd5' }
    }),
    render(temesc, [render(lua), Btn('btn-temesc', 4, 'blue')])
]);