import { dicionário as dsk } from "./dicionário.js";
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
            innerText: '=>'
        }
    });

    Container(['main', { div: { class: 'blocos' } }, 23, 'container', 'bl_']);

    const txt = selek('txt'), res = selek('res');

    addClass(
        { elems: [txt, res], classe: 'padd5 bg_vidro br_20' },
        { elems: [selek('container')], classe: 'grid' }
    );

    texto(
        { id: 'ttl', texto: 'Dicionário de russo' }
    );

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