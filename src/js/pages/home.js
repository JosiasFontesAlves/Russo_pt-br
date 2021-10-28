import dicionário from "../dicionário.js";
import { addClass, Card, kreatto, render, SearchBox, selek, texto } from "../lib7.js";
import search from "../search.js";

export default () => {
    location.hash = '#home';

    kreatto(
        {
            main: [
                {
                    section: {
                        id: 'search',
                        class: 'flex center'
                    }
                },
                {
                    div: {
                        class: 'grid',
                        id: 'container'
                    }
                }
            ]
        },
        {
            '#search': [
                {
                    p: { id: 'res' }
                }
            ]
        }
    );

    selek('search').appendChild(
        SearchBox(
            {
                id: 'txt',
                type: 'text',
                placeholder: 'Pesquisar no dicionário'
            },
            { id: 'ok' }
        )
    );

    const [txt, res] = ['txt', 'res'].map(id => selek(id));

    addClass({ elems: [txt, res], classe: 'padd5 bg_vidro br_20' });

    texto({ ttl: 'Dicionário de russo' }, { ok: '=>' });

    for (let [letra, palavras] of Object.entries(dicionário)) {
        const trads = [...Object.entries(palavras)].map(([pt, ru]) => render({ p: { class: 'trad' } }, `${pt} - ${ru}`));

        selek('container').appendChild(Card({ div: { class: 'blocos' } }, [render({ h2: { class: `letra_${letra}` } }, letra), ...trads]));
    }

    res.hidden = true;

    search();
}