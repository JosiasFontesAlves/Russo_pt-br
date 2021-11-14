import { selek, selekFn } from "./lib7.js";
import dsk from "./dsk.js";
import setRes from "./setRes.js";
import salvarRes from "./salvarRes.js";
import setTrad from "./setTrad.js";

export default () => {
    const game = [],
        txt = selek('txt'),
        respostas = [];

    for (let obj of Object.values(dsk)) // injeta todas as palavras do dicionário dentro de um array
        game.push(...Object.entries(obj))

    let res;

    const init = () => {
        selek('pergunta').innerHTML = '';

        res = game[Math.floor(Math.random() * game.length)];

        setTrad(res[1]);
    }

    init();

    selekFn('btn-res', 'click', () => {
        if (txt.value !== '') {
            res[2] = txt.value;

            txt.value = '';

            respostas.push(salvarRes(res));

            setRes(JSON.stringify(respostas));

            init();
        }
    });
}