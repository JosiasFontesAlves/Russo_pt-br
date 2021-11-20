import { render } from "../lib7.js";
import { copyright, footer } from "../template.js";

const Copyright = render(copyright, 'Josias Fontes Alves - Matsa \u00A9 2021')

export default render(footer, Copyright);