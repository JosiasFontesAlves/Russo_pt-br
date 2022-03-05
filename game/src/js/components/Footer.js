import { render } from "../lib7.js";
import { btnLinkBox, copyright, footer } from "../template.js";
import TemEsc from "./TemEsc.js";

export default render(footer, [
    TemEsc, render(btnLinkBox, '+'),
    render(copyright, 'Matsa \u00A9 2022')
]);