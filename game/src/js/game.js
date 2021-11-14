import { consumirAPI, insertChilds, render, selek, selekFn, seleKlass, Tabela } from "./lib7.js";
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

    let res, ctrl = 0, { value } = txt;

    const limpar = id => selek(id).innerHTML = '';

    const init = () => {
        limpar('pergunta');

        res = game[Math.floor(Math.random() * game.length)];

        setTrad(res[1]);
    },
        setCor = () => {
            const blocos = seleKlass('blocos');

            blocos[ctrl++].style.background = (res[2] === res[0].toLowerCase()) ? 'green' : 'red';
        },
        setGame = () => {
            res.push(txt.value);

            txt.value = '';

            respostas.push(setRes(res));

            salvarRes(JSON.stringify(respostas));

            setCor();

            init();
        },
        resultado = () => {
            limpar('root');

            consumirAPI('/res', res => insertChilds('#root', [
                render({ h1: { id: 'resultado' } }, 'Seus resultados:'),
                Tabela(res),
                render({ a: { href: '', id: 'reload' } }, 'Tentar novamente')
            ]));
        }

    init();

    selekFn('btn-res', 'click', () => (value == '' && ctrl < 4) ? setGame() : resultado());
}