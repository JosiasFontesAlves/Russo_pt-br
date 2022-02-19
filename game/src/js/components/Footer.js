import { render } from "../lib7.js";
import { btnLinkBox, copyright, footer } from "../template.js";
import LinkBox from "./LinkBox.js";

export default render(footer, [
    LinkBox, render(copyright, 'Matsa \u00A9 2022'),
    render(btnLinkBox, '+')
]);