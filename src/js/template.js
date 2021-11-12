import { addClass, Btn, dropDown, kreatto, render, sElem, templatr, texto } from './lib7.js'; // lib 7 v3.1.5
import { body_childs, copyright, kreatto_childs, lista_drop, lua, padd3, temesc } from "./setTemplate.js";
import loadTemplate from './loadTemplate.js';

templatr(...body_childs);

Object.entries(kreatto_childs).forEach(([tag, childs]) => kreatto({ [tag]: childs }));

addClass({ elems: [sElem('header'), sElem('footer')], classe: ' w100 fix' });

texto(copyright);

const listaDrop = Object.entries(lista_drop).map(([link, txt]) => render(padd3, render({ a: { href: link } }, txt)));

dropDown({
    local: 'drop',
    btn: '#btn-menu',
    lista: [
        ...listaDrop,
        ...[lua, temesc].map(elem => render(elem)),
        Btn('btn_temesc', 4, 'blue')
    ]
});

loadTemplate();