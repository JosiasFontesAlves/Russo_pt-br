import { consumirAPI, selek, selekFn, sElem, SPA, temEsc } from "./lib7.js";
import alfabeto from "./pages/alfabeto.js";
import decl from "./pages/decl.js";
import dias_semana from "./pages/dias_semana.js";
import home from "./pages/home.js";
import meses from "./pages/meses.js";
import search from "./search.js";

consumirAPI('/temesc.json', ({ temEsc }) => {
    const [btnTemesc, main, body] = ['#btn-temesc', 'main', 'body'].map(el => sElem(el));

    if (temEsc) {
        btnTemesc.classList.add('posX_30');
        [main, body].map(({ classList }) => classList.add('temEsc'));
    }
});

export default () => {
    home();

    SPA({
        '#home': home,
        '#decl': decl,
        '#semana': dias_semana,
        '#alfabeto': alfabeto,
        '#meses': meses
    }, () => ['#ttl', 'main'].map(el => sElem(el).innerHTML = ''));

    selekFn('btn-menu', 'click', () => selek('drop').classList.toggle('drop_hidden'));

    temEsc('btn-temesc', ['body', 'main'], 'temEsc', ({ target }) => {
        target.classList.toggle('posX_30');

        fetch('/tema', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temEsc: target.classList.contains('posX_30') }, null, 4)
        });
    });

    search();
}