import { addClass, grid, kreatto, sElem, templatr, texto } from "./lib7.js";

templatr('header', { section: { id: 'container' } }, 'footer');

grid('blocos', 5, 'bl_');

kreatto(
    { header: [{ h1: { id: 'title' } }] }, { '#bl_0': [{ input: { id: 'txt', type: 'text' } }, { input: { id: 'ok', type: 'button', value: '=>' } }] },
    { footer: [{ p: { id: 'copyright' } }] }
);

['header', 'footer'].forEach(el => addClass({ elems: [sElem(el)], classe: 'fix w100' }));

texto({ id: 'title', texto: 'Dicionário de russo' }, { id: 'copyright', texto: 'Matsa &copy; 2021' });