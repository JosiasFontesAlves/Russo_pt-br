import dicionário from "./dicionário.js";
import { addClass, Container, criarLista, kreatto, render, SearchBox, selek, selekFn, texto } from "./lib7.js";

export default () => {
    location.hash = '#home';

    kreatto(
        {
            main: [
                { section: { id: 'search', class: 'flex center' } }
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

    Container(['main', { div: { class: 'blocos' } }, 23, 'container', 'bl_']);

    const txt = selek('txt'),
        res = selek('res');

    addClass({ elems: [txt, res], classe: 'padd5 bg_vidro br_20' }, { elems: [selek('container')], classe: 'grid' });

    texto({ ttl: 'Dicionário de russo' }, { ok: '=>' });

    let ctrl = 0;

    for (let letra in dicionário) {
        selek(`bl_${ctrl++}`).append(
            render('h2', letra),
            render({ p: { id: `blc_${ctrl}` } })
        );

        criarLista([
            `blc_${ctrl}`, [...Object.entries(dicionário[letra]).map(([pt, ru]) => `${pt} - ${ru}`)],
            { p: { class: 'trad' } }
        ]);
    }

    res.hidden = true;

    const search = () => {
        res.hidden = false;
        res.innerHTML = '';

        res.append(
            `${txt.value} - ${dicionário[txt.value[0].toUpperCase()][txt.value] ?? 'Ainda não temos essa palavra no dicionário'}`,
            render({ button: { id: 'close', class: 'br_20' } }, 'X')
        );

        selekFn('close', 'click', () => res.hidden = true);

        txt.value = '';
    }

    selekFn('ok', 'click', () => (res.hidden == true && txt.value != '') ? search() : res.hidden = true);
}