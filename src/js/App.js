import { selek, selekFn, sElem, SPA } from "./lib7.js";
import alfabeto from "./pages/alfabeto.js";
import decl from "./pages/decl.js";
import dias_semana from "./pages/dias_semana.js";
import home from "./pages/home.js";
import meses from "./pages/meses.js";
import search from "./search.js";
import setTema from "./setTema.js";

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

    setTema();

    search();
}