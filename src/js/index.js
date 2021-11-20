import { templatr } from "./lib7.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import App from "./App.js";
import Footer from "./components/Footer.js";

templatr([Header, Main, Footer]);

location.hash = '#home';

App();