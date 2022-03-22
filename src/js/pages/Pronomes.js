import { render, Tabela } from '../lib7.js';
import { pronomes, tab_pronomes } from '../template.js';

export default render(pronomes, [
    render(
        { h2: { id: 'title-tab-pronomes' } },
        'Declinação dos pronomes pessoais'
    ),
    Tabela('tab-pronomes', tab_pronomes)
]);