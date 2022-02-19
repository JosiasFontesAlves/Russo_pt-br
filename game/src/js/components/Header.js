import { render, Title } from "../lib7.js";
import Barr from "./Barr.js";

export default render({ header: { class: 'flex fix w100' } }, [
    Title('Matsa', { id: 'ttl' }), Barr
]);