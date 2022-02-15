import { render } from "../lib7.js";
import Container from "../components/Container.js";
import SearchBox from '../components/SearchBox.js';
import { home } from "../template.js";

export default render(home, [SearchBox, Container]);