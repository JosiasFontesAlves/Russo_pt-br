import { render } from "../lib7.js";
import { copyright, footer } from "../template.js";

export default render(footer, render(copyright, `Josias Fontes Alves - Matsa \u00A9 ${new Date().getFullYear()}`));