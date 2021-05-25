import { dicionário as dsk } from "./dicionário.js";
import { popUp, selek, selekFn, texto } from "./lib7.js";

selekFn('ok', 'click', () => {
    let res = selek('cx_pesquisa').value;
    texto({ id: 'bl_0', texto: dsk[res[0].toUpperCase()][res] });
    res = '';
});

popUp();