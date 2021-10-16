import home from "./pages/home.js";
import decl from "./pages/decl.js";
import alfabeto from "./pages/alfabeto.js";
import dias_semana from "./pages/dias_semana.js";
import meses from "./pages/meses.js";
import { consumirAPI, selek, selekFn, sElem, SPA, temEsc } from "./lib7.js"; // lib 7 v2.8.7

export default () => {
    const [main, body] = ['main', 'body'].map(elem => sElem(elem)), { style } = body;

    temEsc('btn_temesc', ['30px']);

    selekFn('btn_temesc', 'click', () => {
        main.style.color = (style.background == 'black') ? 'var(--nardoGray)' : 'black';

        fetch('/tema', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'tema_body': style.background, 'tema_color': main.style.color }, null, 4)
        });
    });

    window.onload = () => {
        home();

        consumirAPI('/tema', ({ tema_body, tema_color }) => [style.background, main.style.color] = [tema_body, tema_color]);

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