import { } from "./lib7.js";
import { dicionário } from "./dicionário.js";

const arr = [];
for (let x in dicionário) {
    arr.push(`${x} - ${dicionário[x]}`);
}