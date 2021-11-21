import dicionário from "../dicionário.js";
import { render } from "../lib7.js";
import setMain from "../setMain.js";
import { meses } from "../template.js";
import ttl from "../ttl.js";

export default () => {
    ttl('Meses do ano');

    const Meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ].map(mês => render({ p: { class: "meses_ano" } }, `${mês} - ${dicionário[mês[0]][mês]}`));

    setMain(meses, Meses);
}