import { mapEntries, selek, selekFn, SPA, texto } from "./lib7.js";
import Home from "./pages/Home.js";
import routes from "./routes.js";
import search from "./search.js";
import setTema from "./setTema.js";

const setRoot = child => {
    const root = selek('root');

    mapEntries({
        innerHTML: '',
        classList: (location.hash !== '#home') ? 'center flex h100' : ''
    }, ([prop, val]) => root[prop] = val);

    root.appendChild(child);
}

const drop_hidden = () => selek('drop').classList.toggle('drop_hidden');

export default () => {
    setRoot(Home);

    SPA(routes, hash => {
        setRoot(hash[location.hash]);
        drop_hidden();
    });

    selekFn('btn-menu', 'click', drop_hidden);

    texto({ ok: '=>' });

    setTema();

    search();
}