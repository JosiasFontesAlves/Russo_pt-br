import { addClass, criarLista, grid, kreatto, selek, templatr, texto } from "./lib7.js";
import { dicionário2 } from "./dicionário2.js";

templatr('header', { section: { id: 'container' } });

grid('blocos', 2, 'bl_');

kreatto(
    { header: 'h1 id="ttl"' }, { '#bl_0': [{ input: { type: 'text', id: 'cx_pesquisa' } }, { input: { type: 'button', id: 'ok', value: '=>' } }] }
);

addClass({ elems: [selek('bl_0')], classe: ' flex center' }, { elems: [selek('cx_pesquisa'), selek('ok')], classe: ' fix' });

texto({ id: 'ttl', texto: 'Dicionário de russo' });