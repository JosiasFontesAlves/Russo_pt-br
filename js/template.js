import home from "./home.js";
import decl from "./decl.js";
import alfabeto from "./alfabeto.js";
import dias_semana from "./dias_semana.js";
import meses from "./meses.js";
import { addClass, criarBotão, dropDown, kreatto, render, selek, selekFn, sElem, temEsc, templatr, texto } from "./lib7.js"; // lib 7 v2.4.8

const title = t => sElem('title').innerText = t;

templatr(
    { header: { class: 'bg_vidro padd7 ' } },
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
    { footer: [{ p: { id: "mts" } }] }
);

addClass({ elems: [sElem('header'), sElem('footer')], classe: 'w100 fix' });

texto({ id: 'mts', texto: render('p', 'Josias Fontes Alves - Matsa &copy; 2021') });

const listaDrop = [];

[
    { "#home": "Início" }, { "#decl": "Declinação" }, { "#semana": "Dias da semana" },
    { "#alfabeto": "Alfabeto" }, { "#decl": "Declinação" }, { "#meses": "Meses do ano" }
].forEach(link => {
    for (let num in link) listaDrop.push(render({ a: { href: num } }, link[num]));
});

dropDown({
    local: 'drop',
    btn: '#ttl',
    lista: [...listaDrop, render({ img: { id: "lua", src: "../temesc.png" } }, ''), render({ p: { id: "temesc" } })]
});

criarBotão('temesc', 'btn_temesc', 5, 'blue');

temEsc('btn_temesc', ['30px']);

const main = sElem('main'), { style } = sElem('body');

selekFn('btn_temesc', 'click', () => {
    style.background == 'black' ? main.style.color = 'var(--nardoGray)' : main.style.color = 'black';
    localStorage.setItem('tema_body', style.background);
    localStorage.setItem('tema_color', main.style.color);
});

window.onload = () => {
    home();

    style.background = localStorage.getItem('tema_body');
    main.style.color = localStorage.getItem('tema_color');

    window.onhashchange = () => {
        main.innerHTML = '';
        selek('drop').hidden = true;

        switch (location.hash) {
            case '#home':
                home();
                title('Dicionário de russo');
                break;
            case '#decl':
                decl();
                title('Tabela de declinação');
                break;
            case '#alfabeto':
                alfabeto();
                title('Alfabeto russo');
                break;
            case '#semana':
                dias_semana();
                title('Dias da semana');
                break;
            case '#meses':
                meses();
                title('Meses do ano');
                break;
        }
    }
}