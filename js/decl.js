import { declinação } from "./declinação.js";
import { addCSS, criarTabela, kreatto, texto } from "./lib7.js";

export default () => {
    
    texto({ id: 'ttl', texto: 'Tabela de declinação' });

    kreatto({ main: 'div id="tab"' });

    criarTabela('tab', 'col', 'fila', declinação);
}