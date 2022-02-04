import { render } from "../lib7.js";
import Barr from "./Barr.js";

export default render({ header: { class: 'flex fix w100' } }, [
    render({ h1: { id: 'ttl' } }, 'Matsa'), Barr
]);