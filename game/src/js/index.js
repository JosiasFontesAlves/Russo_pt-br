import { mapEntries, selekFn, SPA, templatr, toggle } from './lib7.js';
import Header from './components/Header.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';
import game from './game.js';
import setTema from './setTema.js';
import routes from './routes.js';

templatr([Header, Root, Footer]);

location.hash = '#home';

SPA(routes, '#root');

game();

setTema();

selekFn('btn-linkBox', 'click', ({ target }) => {
    mapEntries({
        x100: 'linkBox', z45: target.id
    }, ([classe, el]) => toggle(`#${el}`, classe));
});