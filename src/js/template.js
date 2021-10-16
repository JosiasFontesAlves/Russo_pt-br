import { addClass, criarBotão, dropDown, kreatto, render, sElem, templatr, texto } from "./lib7.js"; // lib 7 v2.8.7
import loadTemplate from "./loadTemplate.js";

templatr(
    { header: { class: 'bg_vidro padd7' } },
    { main: { class: 'w100 flex center' } },
    'footer'
);

kreatto(
    {
        header: [
            { h1: { id: "ttl" } },
            { div: { id: "drop", class: "fix" } }
        ]
    },
    { footer: [{ h6: { id: "mts" } }] }
);

addClass({ elems: [sElem('header'), sElem('footer')], classe: ' w100 fix' });

texto({ mts: 'Josias Fontes Alves - Matsa \u00A9 2021' });

const listaDrop = Object.entries({
    "#home": "Início",
    "#decl": "Declinação",
    "#semana": "Dias da semana",
    "#alfabeto": "Alfabeto",
    "#meses": "Meses do ano"
}).map(([link, txt]) => render({ p: { class: 'padd3' } }, render({ a: { href: link } }, txt)));

dropDown({
    local: 'drop',
    btn: '#ttl',
    lista: [
        ...listaDrop,
        render({
            img: {
                alt: 'lua', id: "lua",
                src: "./temesc.png",
                class: 'fix'
            }
        }),
        render({ p: { id: "temesc" } })
    ]
});

criarBotão('temesc', 'btn_temesc', 5, 'blue');

loadTemplate();