import { dicionário as dsk } from "./dicionário.js";
import { criarLista, grid, kreatto, render, texto } from "./lib7.js";

export default () => {
    kreatto({ main: [{ section: { id: 'container' } }] });

    texto({ id: 'ttl', texto: 'Dicionário de russo' });
    
    grid('blocos', 23, 'bl_', 'container', 'div');

    let ctrl = 0;

    for (let a in dsk) {
        texto({ id: `bl_${ctrl++}`, texto: `${render('h2', a)} ${render({ p: { id: 'blc_' + ctrl } }, '')}` }); // Insere as letras no começo
        for (let b in dsk[a])
            criarLista([`blc_${ctrl}`, [`${b} - ${dsk[a][b]}`], 'p class="trad"']); // Insere as traduções
    }
}