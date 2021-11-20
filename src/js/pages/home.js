import { Card, insertChilds, render, SearchBox, texto } from "../lib7.js";
import { blocos, main_childs, res, searchBox } from "../template.js";
import dicionário from "../dicionário.js";
import ttl from "../ttl.js";

export default () => {
    ttl('Dicionário de russo');
    
    const [Search, Container] = main_childs.map(child => render(child));

    const Res = render(res);

    Res.hidden = true;

    Search.append(Res, SearchBox(...searchBox));

    Object.entries(dicionário).forEach(([letra, palavras]) => {
        const trads = Object.entries(palavras).map(([pt, ru]) => render({ p: { class: 'trad' } }, `${pt} - ${ru}`));

        Container.appendChild(
            Card(blocos, [render({ h2: { class: `letra_${letra}` } }, letra), ...trads])
        );
    });

    insertChilds('main', [Search, Container]);

    texto({ ok: '=>' });
}