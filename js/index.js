import { addClass, grid, templatr } from "./lib7.js";

templatr('header', { section: { id: 'container' } }, 'footer');

addClass({elems: ['header', 'footer'], classe: 'fix w100'});

grid('blocos', 5, 'bl_');