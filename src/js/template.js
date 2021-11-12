import { addClass, Btn, dropDown, kreatto, render, sElem, templatr, texto } from './lib7.js'; // lib 7 v3.1.5
import loadTemplate from './loadTemplate.js';

templatr(
    { header: { class: 'bg_vidro center flex padd7' } },
    { main: { class: 'w100 flex center' } },
    'footer'
);

kreatto(
    {
        header: [
            { button: { id: 'btn-menu', class: 'fix' } },
            { h1: { id: 'ttl' } },
            { div: { id: 'drop', class: 'bg_vidro fix' } }
        ]
    },
    {
        footer: [{ h6: { id: 'mts' } }]
    }
);

addClass({ elems: [sElem('header'), sElem('footer')], classe: ' w100 fix' });

texto({ mts: 'Josias Fontes Alves - Matsa \u00A9 2021' });

const listaDrop = Object.entries({
    '#home': 'Início',
    '#decl': 'Declinação',
    '#semana': 'Dias da semana',
    '#alfabeto': 'Alfabeto',
    '#meses': 'Meses do ano'
}).map(([link, txt]) => render({ p: { class: 'padd3' } }, render({ a: { href: link } }, txt)));

dropDown({
    local: 'drop',
    btn: '#btn-menu',
    lista: [
        ...listaDrop,
        render({
            img: {
                alt: 'lua', id: 'lua',
                src: './temesc.png',
                class: 'fix'
            }
        }),
        render({ p: { id: 'temesc' } }),
        Btn('btn_temesc', 4, 'blue')
    ]
});

loadTemplate();