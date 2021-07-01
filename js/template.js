import home from "./home.js";
import decl from "./decl.js";
import alfabeto from "./alfabeto.js";
import dias_semana from "./dias_semana.js";
import { addClass, criarBotão, dropDown, kreatto, selekFn, sElem, temEsc, templatr, texto } from "./lib7.js"; // lib 7 v2.2.5

const title = t => sElem('title').innerText = t;

templatr('header', { main: { class: 'w100' } }, 'footer');

kreatto({ header: ['h1 id="ttl"', { div: { id: "drop", class: "fix" } }] }, { footer: 'p id="mts"' });

addClass({ elems: [sElem('header'), sElem('footer')], classe: 'w100 fix' });

texto({ id: 'mts', texto: '<p> Josias Fontes Alves - Matsa &copy; 2021</p>' });

dropDown({
    local: 'drop',
    btn: '#ttl',
    lista: [
        '<a href="#home"> Início </a>', '<a href="#decl"> Declinação </a>', '<a href="#semana"> Dias da semana </a>', 
        '<a href="#alfabeto"> Alfabeto </a>', '<img id="lua" src="../temesc.png"><p id="temesc"><p>'
    ]
});

criarBotão('temesc', 'btn_temesc', 5, 'blue');

temEsc('btn_temesc', ['30px']);

selekFn('btn_temesc', 'click', () => {
    const { style } = sElem('body'), main = sElem('main');
    style.background == 'black' ? main.style.color = 'var(--nardoGray)' : main.style.color = 'black';
});

window.onload = () => {
    //home();
    dias_semana();

    window.onhashchange = () => {
        sElem('main').innerHTML = '';

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
        }
    }
}