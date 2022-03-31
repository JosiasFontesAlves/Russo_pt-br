import russo from "../russo.js";
import { render } from "../lib7.js";
import { meses, meses_ano } from "../template.js";

export default render(meses, [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
].map(mês => render(meses_ano, `${mês} - ${russo[mês[0]][mês]}`)));