import { templatr, texto } from './lib7.js';
import Header from './components/Header.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';
import game from './game.js';

templatr([Header, Root, Footer]);

texto({ 'btn-ok': '=>' });

game();