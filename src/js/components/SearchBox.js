import { render, SearchBox } from "../lib7.js";
import { res, search, searchBox } from "../template.js";

export default render(search, [SearchBox(...searchBox), render(res)]);