import { templatr } from './lib7.js';
import Header from './components/Header.js';
import Root from './components/Root.js';
import Footer from './components/Footer.js';

templatr(Header, Root, Footer);

location.hash = '#home';