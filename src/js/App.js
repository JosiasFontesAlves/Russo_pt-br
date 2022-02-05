import { selek, selekFn, SPA, texto } from "./lib7.js";
import Home from "./pages/Home.js";
import routes from "./routes.js";
import search from "./search.js";
import setTema from "./setTema.js";

const setRoot = child => {
    const root = selek('root');
    root.innerHTML = '';
    root.appendChild(child);

    document.body.classList = (location.hash !== '#home') ? 'center flex h100' : '';
}

export default () => {
    setRoot(Home);

    SPA(routes, hash => setRoot(hash[location.hash]));

    selekFn('btn-menu', 'click', () => selek('drop').classList.toggle('drop_hidden'));

    texto({ ok: '=>' });

    setTema();

    search();
}