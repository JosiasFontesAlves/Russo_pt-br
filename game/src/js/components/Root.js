import { render, SearchBox } from "../lib7.js";
import { perguntas, root, searchbox } from "../template.js";

export default render(root, [
    render(perguntas), SearchBox(...searchbox)
]);