import { selek, selekFn, texto } from "./lib7.js";
import { dicionário } from "./dicionário.js";

selekFn('ok', 'click', () => {
    texto({ id: 'bl_1', texto: dicionário[selek('txt').value] ?? "Ainda não temos essa palavra no dicionário" });
    selek('txt').value = '';
});