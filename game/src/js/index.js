import { temEsc, templatr } from './lib7.js';
import Header from './components/Header.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';
import game from './game.js';
import setTema from './setTema.js';

templatr([Header, Root, Footer]);

game();

setTema();