import home from "./pages/home.js";
import decl from "./pages/decl.js";
import alfabeto from "./pages/alfabeto.js";
import dias_semana from "./pages/dias_semana.js";
import meses from "./pages/meses.js";
import { consumirAPI, selek, sElem, SPA, temEsc } from "./lib7.js"; // lib 7 v3.1.2

export default () => {
    const [main, body, btn_temesc] = ['main', 'body', '#btn_temesc'].map(elem => sElem(elem));

    temEsc('btn_temesc', ['main'], 'temEsc', ({ target }) => {
        target.classList.toggle('posX_30');

        fetch('/tema', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temEsc: target.classList.contains('posX_30') }, null, 4)
        });
    });

    window.onload = () => {
        home();

        consumirAPI('/tema', ({ temEsc }) => {
            if (temEsc) {
                btn_temesc.classList.add('posX_30');
                [main, body].map(({ classList }) => classList.add('temEsc'));
            }
        });

        SPA({
            '#alfabeto': alfabeto,
            '#decl': decl,
            '#home': home,
            '#meses': meses,
            '#semana': dias_semana,
        }, () => {
            [main, selek('ttl')].forEach(txt => txt.innerHTML = '');

            selek('drop').hidden = true;
        });
    }
}