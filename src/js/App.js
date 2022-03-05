import { selekFn, SPA, toggle } from "./lib7.js";
import routes from "./routes.js";
import search from "./search.js";
import setTema from "./setTema.js";

export default () => {
    SPA(routes, '#root');

    selekFn('#btn-menu', 'click', () => toggle('#drop', 'drop_hidden'));

    setTema();

    search();
}