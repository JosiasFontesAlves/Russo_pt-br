import { addClass, grid, kreatto, selek, seleKlass, templatr, texto } from "./lib7.js";
import { dicionário2 } from "./dicionário2.js";

templatr('header', { section: { id: 'cx' } }, { section: { id: 'container' } });

kreatto(
    { header: 'h1 id="ttl"' }, { '#cx': [{ input: { type: 'text', id: 'cx_pesquisa' } }, { input: { type: 'button', id: 'ok', value: '=>' } }] }
);

grid('blocos', 24, 'bl_');

addClass({ elems: [selek('cx')], classe: 'flex center' }, { elems: [selek('cx_pesquisa'), selek('ok')], classe: ' fix' });

texto({ id: 'ttl', texto: 'Dicionário de russo' });

console.log(dicionário2[Object.keys(dicionário2)]);

//[...seleKlass('blocos')].forEach((blc, i) => {
//    texto({ id: `bl_${i}`, texto: `<h2>${Object.keys(dicionário2)[i]}</h2>` });
//});