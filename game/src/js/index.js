import { SPA, templatr } from './lib7.js';
import Header from './components/Header.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';
import App from './App.js';
import routes from './routes.js';

templatr([Header, Root, Footer]);

App();

location.hash = '#home';

SPA(routes, '#root');