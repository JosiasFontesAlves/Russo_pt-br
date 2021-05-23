import { grid, kreatto, templatr, texto } from "./lib7.js";

templatr('header', { section: { id: 'container' } });

grid('blocos flex center', 2, 'bl_');

kreatto(
    { header: 'h1 id="ttl"' },
    { '#bl_0': [{ input: { type: 'text', class: 'fix', id: 'cx_pesquisa', } }, { input: { type: 'button', id: 'ok', value: '=>' } }] }
);

texto({ id: 'ttl', texto: 'Dicionário de russo' });