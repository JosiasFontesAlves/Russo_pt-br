import { render, Title } from "../lib7.js";
import { header, ttl } from "../template.js";
import Barr from "./Barr.js";

export default render(header, [Title('Matsa', ttl), Barr]);