import { Btn, render } from "../lib7.js";
import { lua, btn_drop, temesc } from "../template.js";

export default render(temesc, [render(lua), Btn(...btn_drop)]);