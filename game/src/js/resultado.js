import { insertChilds, render, selek, selekFn, Tabela } from './lib7.js';

export default respostas => {
    selek('#root').innerHTML = '';

    insertChilds('#root', [
        render('h2', 'Seus resultados:'),
        Tabela('Resultado', respostas),
        render({ button: { class: 'padd10', id: 'btn-reload' } }, 'Jogar novamente')
    ]);

    selekFn('#btn-reload', 'click', () => location.reload());
};