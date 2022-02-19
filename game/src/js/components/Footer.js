import { render } from "../lib7.js";
import { copyright, footer } from "../template.js";

export default render(footer, [
    render(copyright, 'Matsa \u00A9 2022')
]);