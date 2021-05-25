/*  
    * * * * * * * * * * * * *     * * * * * * * * *    * * * * * * * * * *    * * * * * * * * *     * * * * * * * * * * 
    * * * * * * * * * * * * *     * * * * * * * * *    * * * * * * * * * *    * * * * * * * * *     * * * * * * * * * * 
    * *                   * *     * *           * *            * *            * *                   * *             * *  
    * *        * *        * *     * * * * * * * * *            * *            * * * * * * * * *     * *     * *     * * 
    * *        * *        * *     * * * * * * * * *            * *            * * * * * * * * *     * *     * *     * * 
    * *        * *        * *     * *           * *            * *                          * *     * *             * * 
    * *        * *        * *     * *           * *            * *            * * * * * * * * *     * *             * * 
    * *        * *        * *     * *           * *            * *            * * * * * * * * *     * *             * * 
*/

var versão = '2.1.7';

/** 
* @param {string} local
* @param {string} idBtn - nome do botão
* @param {number} estilo - tipo de botão
* @param {string} cor
*/
export function criarBotão(local, idBtn, estilo, cor) {
    let tam = ["width: 50px; height: 20px; color: rgb(80, 80, 80)", "width: 20px; height: inherit; transform: translateX(-3%)"], borda, botão;

    switch (estilo) {
        case 0:
            borda = `${tam[0]}; border: 2px solid; padding: 2px; border-radius: 15px`;
            botão = `${tam[1]}; background: ${cor}; border-radius: inherit;`;
            break;

        case 1:
            borda = `${tam[0]}; border: 2px solid; padding: 2px;`;
            botão = `${tam[1]}; background: ${cor};`;
            break;

        case 2:
            borda = `${tam[0]}; border: 1px solid; background: lightgreen; border-radius: 25px;`;
            botão = `width: 20px; height: inherit; background: ${cor}; border-radius: 50%;`;
            break;

        case 3:
            borda = `${tam[0]}; background: gray; border-radius: 5px; padding: 2px;`;
            botão = `${tam[1]}; background: ${cor}; border-radius: inherit;`;
            break;

        case 4:
            borda = `width: 50px; height: 15px; background: darkred; border-radius: 25px; display: flex; align-items: center`;
            botão = `width: 25px; height: 25px; background: red; border-radius: 50%;`;
            break;

        case 5:
            borda = `${tam[0]}; border-radius: 25px; background: silver; border: 1px solid`;
            botão = `width: 10px; height: 10px; border: 5px solid ${cor}; background: none; border-radius: 50%;`;
            break;

        case 6:
            borda = `width: 50px; border: 1px solid black; border-radius: 20px; background: ${cor};`;
            botão = `width: 13px; height: 13px; border-radius: 50%; border: 5px solid;`;
            break;

        default: console.error(`o método CriarBotão() requer um parâmetro do tipo int -> \n 0 -> botão redondo
        \n 1 -> botão quadrado \n 2 -> botão redondo flutuante \n 3 -> botão quadrado com borda redonda`);
    }
    document.getElementById(`${local}`).innerHTML = `<div style="${borda};"> <div id="${idBtn}" style="${botão} position: fixed;"> </div> </div>`;
} /* ----- Lib de botões ----- */

export class Tempus {
    /**
    * @param {string} idRel 
    * @param {number} estilo 
    */
    static relógio(idRel, estilo) {
        setInterval(() => {
            const data = new Date(), rlg = [data.getHours(), data.getMinutes(), data.getSeconds()], rel = document.getElementById(`${idRel}`);

            for (let x in rlg) if (rlg[x] < 10) rlg[x] = `0${rlg[x]}`;

            const t = () => rel.innerHTML = rlg.join(':');

            switch (estilo) {
                case 0: t();
                    break;
                case 1:
                    rlg.pop();
                    t();
                    break;
                default: console.error(`O método relógio() requer um parâmetro do tipo int -> \n 0 -> relógio completo \n 1 -> horas e minutos`);
            }
        }, 500);
    }

    /**
    * @param {string} idCal 
    * @param {number} estilo 
    */
    static calendário(idCal, estilo) {
        setInterval(() => {
            const data = new Date(), calendário = {
                diaSem: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
                mês: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
            }, dataCompleta = document.getElementById(`${idCal}`);

            const e = s => dataCompleta.innerHTML = s;

            switch (estilo) {
                case 0:
                    e(`${calendário.diaSem[data.getDay()]} ${data.getDate()} ${calendário.mês[data.getMonth()]} ${data.getFullYear()}`);
                    break;
                case 1:
                    e(dataCompleta.innerHTML = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
                    break;
                default: console.error(`O método calendário() requer um parâmetro do tipo int -> \n 0 -> 00 mês 0000 \n 1 -> 00/00/0000`);
            }
        }, 500);
    }

    /**
    * @param {string} idSau 
    */
    static saudação = idSau => {
        const hora = new Date().getHours();
        let saudação;
        if (hora <= 12) saudação = "Bom dia!";
        else if (hora >= 18) saudação = "Boa noite!";
        else saudação = "Boa tarde!";

        document.getElementById(`${idSau}`).innerHTML = saudação;
    }

    static count(cond, varCtrl) { // Usar apenas nas funções de contagem
        if (cond) clearInterval(varCtrl);
    }
    /**
    * @param {number} contador
    * @param {function} fn
    * @param {number} vel 
    */
    static contagemRegressiva(contador, fn, vel) {
        const cont = setInterval(() => {
            fn();
            contador--;
            this.count(contador == 0, cont);
        }, vel);
    }

    /**
    * @param {number} contador 
    * @param {number} varCtrl 
    * @param {function} fn 
    * @param {number} vel 
    */
    static contagem(contador, varCtrl, fn, vel) {
        const c = setInterval(() => {
            fn();
            contador++;
            this.count(contador >= varCtrl, c);
        }, vel);
    }
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {string} id 
*/
export const selek = id => document.getElementById(`${id}`);

/**
* @param {Element} elem 
*/
export const sElem = elem => document.querySelector(`${elem}`);

/**
* @param {string} id 
* @param {EventListener} ev 
* @param {function} fn 
*/
export const selekFn = (id, ev, fn) => document.getElementById(`${id}`).addEventListener(`${ev}`, fn);

/**
 * @param {Element} elem 
 * @param {EventListener} ev 
 * @param {function} fn 
 */
export const sElemFn = (elem, ev, fn) => document.querySelector(`${elem}`).addEventListener(`${ev}`, fn);

/**
* @param {Element} classe 
*/
export const seleKlass = classe => document.getElementsByClassName(`${classe}`);
/* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {string} id 
* @param {string[]} pos 
*/
export function temEsc(id, pos) {
    document.getElementById(id).addEventListener('click', function () {
        const { body } = document, { style } = this;
        if (pos.length <= 2) {
            style.transform == `translate(0%)` && body.style.background == 'white'
                ? (style.transform = `translate(${pos})`, body.style.background = 'black')
                : (style.transform = `translate(0%)`, body.style.background = 'white');
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {string} id 
* @param {number} px 
*/
export function menuLateral(id, px) {
    const { style } = document.querySelector('aside'), pos = [`translateX(-${px}px)`, 'translateX(0)'];
    style.transform = pos[0];
    document.getElementById(id).addEventListener('click', () => style.transform == pos[0] ? style.transform = pos[1] : style.transform = pos[0]);
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {object} elems
*/
export function kreatto(elems) {
    [...arguments].forEach(tag => {
        for (let t in tag) {
            const inject = res => document.querySelector(t).innerHTML += res;
            if (Array.isArray(tag[t])) {
                for (let v in tag[t]) {
                    if (typeof tag[t][v] == "string") inject(`<${tag[t][v]}></${tag[t][v]}>`);
                    else {
                        let atr = [];
                        for (let a in tag[t][v]) { // a -> elemento a ser inserido
                            for (let b in tag[t][v][a])
                                atr.push(`${b}="${tag[t][v][a][b]}"`); // Atributos
                            if ((tag[t].length == 2) && (typeof tag[t][1] == 'number'))
                                for (let i = 0; i < tag[t][1]; i++) inject(`<${a} ${atr.join(' ')}></${a}>`);
                            else
                                inject(`<${a} ${atr.join(' ')}></${a}>`);
                        }
                    }
                }
            } else inject(`<${tag[t]}></${tag[t]}>`);
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

// IMPORTANTE! --> Sempre usar o templatr no topo do código!

/**
 * @param { string | object } elems
 */
export function templatr(elems) {
    const { body } = document, t = res => body.innerHTML += res;
    [...arguments].forEach(el => {
        switch (typeof el) {
            case 'string':
                t(`<${el}></${el}>`);
                break;
            case 'object':
                for (let e in el) {
                    let atr = [];
                    for (let a in el[e]) {
                        atr.push(`${a}="${el[e][a]}"`);
                    }
                    t(`<${e} ${atr.join(' ')}></${e}>`);
                }
                break;
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {object} arguments
* @param {string} arguments.loop 
* @param {string} arguments.varCtrl
* @param {number} arguments.qtde
* @param {function} arguments.fn
*/
export function loopr({ loop, varCtrl, qtde, fn }) {
    [...arguments].forEach(l => {
        switch (l.loop) {
            case 'for':
                for (l.varCtrl = 0; l.varCtrl < l.qtde; l.varCtrl++)
                    l.fn(l.varCtrl);
                break;
            case 'forEach':
                [...l.varCtrl].forEach(l.fn);
                break;
            case 'forIn':
                for (l.varCtrl in l.var)
                    l.fn(l.varCtrl);
                break;
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/** 
* @param {object} arguments
* @param {string} arguments.id - local do texto 
* @param {string} arguments.texto 
*/
export function texto({ id, texto }) {
    [...arguments].forEach(x => document.getElementById(x.id).innerHTML = x.texto);
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

export class Animatus {
    static a = el => document.getElementById(el);

    static barr(id, pxMax, vel) {
        let px = 0, b = this.a(id);
        setInterval(() => (b.style.width != `${pxMax}px`) ? b.style.width = `${px++}px` : '', vel);
    }

    static girar(id, z, vel) {
        let ang = 0, b = this.a(id);
        setInterval(() => {
            b.style.transform = `rotateZ(${ang++}deg)`;
            if (ang == z) ang = 0;
        }, vel);
    }
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {object} arguments
* @param {string} arguments.local
* @param {string} arguments.btn
* @param {string[]} arguments.lista
* @param {string} arguments.idLista
*/
export function dropDown({ local, btn, lista, idlista }) {
    [...arguments].forEach(drop => {
        document.getElementById(drop.local).innerHTML += `<div id="${drop.idlista}"></div>`;
        let a = document.getElementById(drop.idlista);
        a.id = drop.idLista;
        a.hidden = true;
        for (let x in drop.lista)
            a.innerHTML += `<p> ${lista[x]} </p> `;
        document.querySelector(btn).onclick = () => a.hidden == true ? a.hidden = false : a.hidden = true;
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
* @param {object} arguments
* @param {HTMLElement[]} arguments.elems
* @param {string} arguments.classe
*/
export function addClass({ elems, classe }) {
    [...arguments].forEach(x => [...x.elems].forEach(el => el['classList'] += x.classe));
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {object} arguments
 * @param {string} arguments.local
 * @param {string | string[]} arguments.pesq 
 * @param {string | string[]} arguments.res 
*/
export function replacer() {
    [...arguments].forEach(x => {
        for (let local in x) {
            for (let pesq in x[local]) {
                let str = document.querySelector(local);
                str.innerText = str.innerText.replace(`{{${pesq}}}`, x[local][pesq]);
            }
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

export function jacss() {
    let css = [];
    [...arguments].forEach(tags => {
        for (let x in tags) {
            let atr = [];
            for (let k in tags[x])
                atr.push(`  \n   ${k}: ${tags[x][k]};`);
            css.push(`  \n${x} {${atr.join('')} \n}`);
        }
    });
    document.head.innerHTML += `<style id="jacss">${css.join('\n')}</style>`;
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {object} arguments
 * @param {string} arguments.local
 * @param {string[]} arguments.lista
 * @param {string} arguments.el
 */
export function criarLista([local, lista, el]) {
    [...arguments].forEach(x => x[1].forEach(l => document.getElementById(x[0]).innerHTML += `<${x[2]}> ${l} </${x[2]}>`));
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {object} arguments
 * @param {string} arguments.classe
 * @param {string} arguments.id
 */
export function addId([classe, id]) {
    [...arguments].forEach(e => {
        let cl = [...document.getElementsByClassName(e[0])];
        for (let c in cl) {
            switch (e.length) {
                case 3:
                    cl[c].id = `${e[1]}${Number(c) + 1}`;
                    break;
                default:
                    cl[c].id = `${e[1] + c}`
                    break;
            }
        }
    });
}
/* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} local 
 * @param {string} id 
 * @param {object} param2
 * @param {string} param2.larg
 * @param {string} param2.alt
 * @param {string[]} fotos
 * @param {number} vel
 */
export const slider = (local, id, [larg, alt], fotos, vel) => {
    let s = `width: ${larg}; height: ${alt}; border: 1px solid; border-radius: 7px; background-image: url(img_8.jpg); background-size: cover;`, ctrl = 0;
    document.querySelector(local).innerHTML += `<div id="${id}" style="${s[0]}"></div>`;

    setInterval(() => {
        document.getElementById(id).style.backgroundImage = `url(${fotos[ctrl++]})`;
        if (ctrl >= fts.length) ctrl = 0;
    }, vel);
} /* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} classe 
 * @param {number} qtde 
 * @param {string} id
 */
export function grid(classe, qtde, id) {
    let el = document.getElementById('container');
    el.classList += 'grid';
    for (let i = 0; i < qtde; i++) {
        el.innerHTML += `<div class="${classe}"></div>`;
        if (arguments.length >= 3) [...document.getElementsByClassName(arguments[0])][i].id = `${id}${i}`;
    }
} /* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} id 
 * @param {string[]} pos 
 * @param {string} cont - conteúdo da popUp
 * @param {object} estilo 
 */
export function popUp(id, pos, cont, estilo) {
    let st = [], res = `<h2 id="close" style="top: -18px; right: 5px; position: fixed;">X<h2> ${cont}`;

    for (let x in estilo) 
        st.push(`${x}: ${estilo[x]};`);
    
    document.body.innerHTML += `<div id="${id}" style="position: fixed; transform: translate(${[...pos]}); ${st.join(' ')}"> ${res} </div>`;
    
    document.getElementById('close').addEventListener('click', () => document.querySelector('body').removeChild(document.getElementById(id)));
} /* --------------------------------------------------------------------------------------------------------------------------------- */

console.log(`Lib 7 v${versão} - Matsa \u00A9 2021\nCriada por Josias Fontes Alves`);