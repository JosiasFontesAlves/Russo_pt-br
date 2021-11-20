import { Btn, Card, render } from "../lib7.js";
import { header, header_childs, lista_drop, lua, temesc } from "../template.js";

const [BtnMenu, Ttl, Drop] = header_childs.map(child => render(child));

const links = Object.entries(lista_drop).map(([link, txt]) => render({ a: { href: link } }, txt));

const TemEsc = Card(temesc, [render(lua), Btn('btn-temesc', 4, 'blue')]);

Drop.append(...links, TemEsc);

export default Card(header, [BtnMenu, Ttl, Drop]);