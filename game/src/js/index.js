import { templatr } from "./lib7.js"; // v3.2.2
import Header from "./components/Header.js";
import Root from "./components/Root.js";
import salvarRes from "./salvarRes.js";
import App from "./App.js";

templatr([Header, Root]);

salvarRes('');

App();