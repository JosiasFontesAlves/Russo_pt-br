import { Btn, Link, render } from "../lib7.js";
import { drop, lista_drop, lua, temesc } from "../template.js";

const links = Object.entries(lista_drop).map(([hash, txt]) => Link(hash, txt));

const TemEsc = render(temesc, [render(lua), Btn('btn-temesc', 4, 'blue')]);

export default render(drop, [...links, TemEsc]);