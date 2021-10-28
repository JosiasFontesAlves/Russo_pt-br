import { criarLista, kreatto, texto } from "../lib7.js";
import dicionário from "../dicionário.js";

export default () => {
    texto({ ttl: 'Meses do ano' });
    
    kreatto({
        main: [
            {
                div: {
                    id: 'meses',
                    class: 'fix w100'
                }
            }
        ]
    });

    ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].forEach(mês => {
        criarLista(['meses', [`${mês} - ${dicionário[mês[0].toUpperCase()][mês]}`], { p: { class: "meses_ano" } }]);
    });
}