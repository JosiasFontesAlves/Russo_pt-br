import App from "./App.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { render, templatr } from "./lib7.js";
import { root } from "./template.js";

templatr([Header, render(root), Footer]);

location.hash = '#home';

App();