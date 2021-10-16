import dicionário from "../dicionário.js";
import { addClass, Card, insertChilds, kreatto, render, SearchBox, selek, selekFn, texto } from "../lib7.js";

export default () => {
    location.hash = '#home';

    kreatto(
        {
            main: [
                { section: { id: 'search', class: 'flex center' } },
                { div: { class: 'grid', id: 'container' } }
            ]
        },
        {
            '#search': [
                { p: { id: 'res' } }
            ]
        }
    );

    SearchBox('#search', {
        input: {
            id: 'txt',
            type: 'text',
            placeholder: 'Pesquisar no dicionário'
        },
        button: {
            id: 'ok',
        }
    });

    const [txt, res] = ['txt', 'res'].map(id => selek(id));

    addClass({ elems: [txt, res], classe: 'padd5 bg_vidro br_20' });

    texto({ ttl: 'Dicionário de russo' }, { ok: '=>' });

    for (let [letra, palavras] of Object.entries(dicionário)) {
        const trads = [...Object.entries(palavras)].map(([pt, ru]) => render({ p: { class: 'trad' } }, `${pt} - ${ru}`));

        insertChilds('#container', [
            Card({ class: 'blocos' }, [render({ h2: { class: `letra_${letra}` } }, letra), ...trads])
        ]);
    }

    res.hidden = true;

    // TODO -> criar um arquivo novo pra função search 

    const search = () => {
        res.hidden = false;
        res.innerHTML = '';

        insertChilds('#res', [
            `${txt.value} - ${dicionário[txt.value[0].toUpperCase()][txt.value] ?? 'Ainda não temos essa palavra no dicionário'}`,
            render({ button: { id: 'close', class: 'br_20' } }, 'X')
        ]);

        selekFn('close', 'click', () => res.hidden = true);

        txt.value = '';
    }

    selekFn('ok', 'click', () => (res.hidden == true && txt.value != '') ? search() : res.hidden = true);
}