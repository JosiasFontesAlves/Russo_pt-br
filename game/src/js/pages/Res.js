import { consumirAPI, mapEntries, render, Tabela } from '../lib7.js';
import { resultado, tabRes } from '../template.js';

const $res = await consumirAPI('api.json', api => {
    return mapEntries(api.respostas, ([ttl, res], i) =>
        render(tabRes, [render('h3', ttl), Tabela(`tab-${i}`, res)])
    );
});

export default render(resultado, $res);