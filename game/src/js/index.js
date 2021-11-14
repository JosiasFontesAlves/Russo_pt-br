import { templatr } from "./lib7.js"; // v3.2.2
import Header from "./components/Header.js";
import Root from "./components/Root.js";
import setRes from "./setRes.js";
import App from "./App.js";

templatr([Header, Root]);

setRes('');

App();