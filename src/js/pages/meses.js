import russo from "../russo.js";
import { render } from "../lib7.js";

export default render({
    section: {
        id: 'meses'
    }
}, [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
].map(mês => render({
    p: {
        className: 'meses_ano padd7'
    }
}, `${mês} - ${russo[mês[0]][mês]}`)));