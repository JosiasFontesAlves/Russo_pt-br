import { render, SearchBox } from "../lib7.js";
import { home, perguntas, searchbox } from "../template.js";

export default render(home, [render(perguntas), SearchBox(...searchbox)]);