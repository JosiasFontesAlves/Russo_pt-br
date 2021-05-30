import home from "./home.js";
import decl from "./decl.js";
import { addClass, dropDown, kreatto, sElem, templatr, texto } from "./lib7.js"; // lib 7 v2.1.7

templatr('header', { main: { class: 'w100' } }, 'footer');

kreatto({ header: ['h1 id="ttl"', { div: { id: "drop", class: "fix" } }] }, { footer: 'p id="mts"' });

addClass({ elems: [sElem('header'), sElem('footer')], classe: 'w100 fix' });

texto({ id: 'mts', texto: '<p> Josias Fontes Alves - Matsa &copy; 2021</p>' });

dropDown({
    local: 'drop',
    btn: '#ttl',
    lista: ['<a href="#home"> Início </a>', '<a href="#decl"> Declinação </a>']
});

window.onload = () => {
    //home();
    decl();
    //location.hash = '#home';
    window.onhashchange = () => {
        sElem('main').innerHTML = '';
        switch (location.hash) {
            case '#home': 
                home();
                break;
            case '#decl':
                decl();
                break;
        }
    }
}