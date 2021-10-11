import home from "./home.js";
import decl from "./decl.js";
import alfabeto from "./alfabeto.js";
import dias_semana from "./dias_semana.js";
import meses from "./meses.js";
import { addClass, criarBotão, dropDown, kreatto, render, selek, selekFn, sElem, temEsc, templatr, texto } from "./lib7.js"; // lib 7 v2.8.2

templatr(
    { header: { class: 'bg_vidro padd7 ' } },
    { main: { class: 'w100 flex center ' } },
    'footer'
);

kreatto({
    header: [
        { h1: { id: "ttl" } },
        { div: { id: "drop", class: "fix" } }
    ]
}, { footer: [{ p: { id: "mts" } }] });

addClass({ elems: [sElem('header'), sElem('footer')], classe: 'w100 fix' });

texto({ mts: 'Josias Fontes Alves - Matsa \u00A9 2021' });

const listaDrop = [
    { "#home": "Início" }, { "#decl": "Declinação" }, { "#semana": "Dias da semana" },
    { "#alfabeto": "Alfabeto" }, { "#meses": "Meses do ano" }
].map(links => {
    for (let link in links) {
        return render({ p: { class: 'padd3' } }, render({ a: { href: link } }, links[link]))
    }
});

dropDown({
    local: 'drop',
    btn: '#ttl',
    lista: [
        ...listaDrop,
        render({
            img: {
                alt: 'lua', id: "lua",
                src: "../temesc.png",
                class: 'fix'
            }
        }),
        render({ p: { id: "temesc" } })
    ]
});

const main = sElem('main'),
    { style } = sElem('body');

criarBotão('temesc', 'btn_temesc', 5, 'blue');

temEsc('btn_temesc', ['30px']);

selekFn('btn_temesc', 'click', () => {
    main.style.color = (style.background == 'black') ? 'var(--nardoGray)' : 'black';
    localStorage.setItem('tema_body', style.background);
    localStorage.setItem('tema_color', main.style.color);
});

window.onload = () => {
    home();

    const pages = {
        '#alfabeto': alfabeto,
        '#decl': decl,
        '#home': home,
        '#meses': meses,
        '#semana': dias_semana,
    }

    style.background = localStorage.getItem('tema_body');
    main.style.color = localStorage.getItem('tema_color');

    window.onhashchange = () => {
        [main, selek('ttl')].forEach(txt => txt.innerHTML = '');

        selek('drop').hidden = true;

        pages[location.hash]();
    }
}