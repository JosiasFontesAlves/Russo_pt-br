import { render, Tabela } from '../lib7.js';
import { btnReload } from '../template.js';

export default respostas => [
    render('h3', 'Fim de Jogo!'), 
    Tabela('respostas', respostas), 
    render(btnReload, 'Jogar novamente')
];