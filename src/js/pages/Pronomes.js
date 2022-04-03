import { render, Tabela } from '../lib7.js';
import { pronomes, tab_pronomes, title_tab_pronomes } from '../template.js';

export default render(pronomes, [
    render(...title_tab_pronomes),
    Tabela('tab-pronomes', tab_pronomes)
]);