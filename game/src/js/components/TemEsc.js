import { Btn, Img, render } from "../lib7.js";
import { temesc } from "../template.js";

export default render(temesc, [
    Img('img/lua.png', 'lua', { width: 30 }),
    Btn('btn-temesc', 4, '#0055ff')
]);