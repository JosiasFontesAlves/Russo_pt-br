import App from "./App.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { render, templatr } from "./lib7.js";

templatr([Header, render({ div: { id: 'root' } }), Footer]);

location.hash = '#home';

App();