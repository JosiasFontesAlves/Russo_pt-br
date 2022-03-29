import { SPA, templatr } from './lib7.js';
import Header from './components/Header.js';
import Aside from './components/Aside.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';
import App from './App.js';
import routes from './routes.js';

templatr([Header, Aside, Root, Footer]);

App();

location.hash = '#resultados';

SPA(routes, '#root');