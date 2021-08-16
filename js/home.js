import { dicionário as dsk } from "./dicionário.js";
import { addClass, criarLista, grid, kreatto, render, selek, selekFn, texto } from "./lib7.js";

export default () => {
    kreatto(
        {
            main: [
                { section: { id: 'search', class: 'flex center' } },
                { section: { id: 'container' } }
            ]
        },
        {
            '#search': [
                { input: { type: 'text', id: 'txt', placeholder: 'Pesquisar no dicionário' } },
                { button: { id: 'ok' } },
                { p: { id: 'res' } }
            ]
        }
    );

    const txt = selek('txt'), res = selek('res');

    addClass({ elems: [txt, res], classe: 'bg_vidro br_20' });

    texto(
        { id: 'ttl', texto: 'Dicionário de russo' },
        { id: 'ok', texto: '=>' }
    );

    grid('blocos', 23, 'bl_', 'container', 'div');

    let ctrl = 0;

    for (let letra in dsk) {
        texto({ id: `bl_${ctrl++}`, texto: `${render('h2', letra)} ${render({ p: { id: 'blc_' + ctrl } }, '')}` }); // Insere as letras no começo

        for (let palavra in dsk[letra]) 
            criarLista([`blc_${ctrl}`, [`${palavra} - ${dsk[letra][palavra]}`], { p: { class: 'trad' } }]); // Insere as traduções
    }

    res.hidden = true;

    const search = () => {
        res.hidden = false;

        texto({
            id: 'res',
            texto: `
                ${txt.value} - ${dsk[txt.value[0].toUpperCase()][txt.value] ?? 'Ainda não temos essa palavra no dicionário'}
                ${render({ button: { id: 'close', class: 'br_20' } }, 'X')}
            `
        });

        selekFn('close', 'click', () => res.hidden = true);

        txt.value = '';
    }

    selekFn('ok', 'click', () => (res.hidden == true && txt.value != '') ? search() : res.hidden = true);
}