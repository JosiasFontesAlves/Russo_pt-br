import { selek, selekFn, SPA } from "./lib7.js";
import routes from "./routes.js";
import search from "./search.js";
import setTema from "./setTema.js";

export default () => {
    SPA(routes, '#root');

    selekFn('btn-menu', 'click', () => selek('drop').classList.toggle('drop_hidden'));

    setTema();

    search();
}