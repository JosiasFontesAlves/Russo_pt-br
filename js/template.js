import { addClass, criarLista, grid, kreatto, selek, templatr, texto } from "./lib7.js";
import { dicionário2 } from "./dicionário2.js";

templatr({ header: { class: 'fix w100' } }, { main: { class: 'w100' } }, 'footer');

kreatto(
    { header: 'h1 id="ttl"' }, { main: [{ section: { id: 'cx', class: 'fix flex center w100' } }, { section: { id: 'container' } }] },
    { '#cx': [{ input: { type: 'text', id: 'cx_pesquisa' } }, { input: { type: 'button', id: 'ok', value: '=>' } }] }, { footer: 'p id="mts"' }
);

grid('blocos', 24, 'bl_');

addClass({ elems: [selek('cx_pesquisa'), selek('ok')], classe: ' fix' });

texto({ id: 'ttl', texto: 'Dicionário de russo' });

let ctrl = 0;

for (let a in dicionário2) {
    texto({ id: `bl_${ctrl++}`, texto: `<h2>${a}</h2> <p id="blc_${ctrl}"></p>` });
    for (let b in dicionário2[a])
        criarLista([`blc_${ctrl}`, [`${b} - ${dicionário2[a][b]}`], 'p']);
}