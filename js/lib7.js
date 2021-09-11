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

let versão = '2.7.3';

/** 
* @param {string} local
* @param {string} idBtn - nome do botão
* @param {number} estilo - tipo de botão
* @param {string} cor
*/
export function criarBotão(local, idBtn, estilo, cor) {
    const tam = ["width: 50px; height: 20px; color: rgb(80, 80, 80)", "width: 20px; height: inherit; transform: translateX(-3%)"];
    const btn = {
        borda: [
            `${tam[0]}; border: 2px solid; padding: 2px; border-radius: 15px`, `${tam[0]}; border: 2px solid; padding: 2px;`,
            `${tam[0]}; border: 1px solid; background: lightgreen; border-radius: 25px;`, `${tam[0]}; background: gray; border-radius: 5px; padding: 2px;`,
            `width: 50px; height: 15px; background: darkred; border-radius: 25px; display: flex; align-items: center`,
            `${tam[0]}; border-radius: 25px; background: silver; border: 1px solid`,
        ],
        botão: [
            `${tam[1]}; background: ${cor}; border-radius: inherit;`, `${tam[1]}; background: ${cor};`,
            `width: 20px; height: inherit; background: ${cor}; border-radius: 50%;`, `${tam[1]}; background: ${cor}; border-radius: inherit;`,
            `width: 25px; height: 25px; background: red; border-radius: 50%;`,
            `width: 10px; height: 10px; border: 5px solid ${cor}; background: none; border-radius: 50%;`,
        ]
    }

    document.getElementById(`${local}`).innerHTML = `
        <div style="${btn.borda[estilo]};"> 
            <div id="${idBtn}" style="${btn.botão[estilo]} position: fixed;"> </div> 
        </div>
    `;
} /* ----- Lib de botões ----- */

export class Tempus {
    /**
    * @param {string} idRel 
    * @param {number} estilo 
    */
    static relógio(idRel, estilo) {
        setInterval(() => {
            const data = new Date(), rlg = [data.getHours(), data.getMinutes(), data.getSeconds()];

            for (let x in rlg) rlg[x] < 10 ? rlg[x] = `0${rlg[x]}` : '';

            const rel = [rlg.join(':'), (rlg.pop(), rlg.join(':'))];

            document.getElementById(`${idRel}`).innerHTML = rel[estilo];
        }, 1000);
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
            }

            const cal = [
                `${calendário.diaSem[data.getDay()]} ${data.getDate()} ${calendário.mês[data.getMonth()]} ${data.getFullYear()}`,
                `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
            ];

            document.getElementById(`${idCal}`).innerHTML = cal[estilo];
        }, 1000);
    }

    /**
    * @param {string} idSau 
    */
    static saudação = idSau => {
        const hora = new Date().getHours();

        document.getElementById(`${idSau}`).innerHTML = (hora <= 12) ? "Bom dia!" : (hora >= 18) ? "Boa noite!" : "Boa tarde!";
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
export const selek = id => document.getElementById(id);

/**
* @param {Element} elem 
*/
export const sElem = elem => document.querySelector(elem);

/**
* @param {string} id 
* @param {EventListener} ev 
* @param {function} fn 
*/
export const selekFn = (id, ev, fn) => document.getElementById(id).addEventListener(ev, fn);

/**
 * @param {Element} elem 
 * @param {EventListener} ev 
 * @param {function} fn 
 */
export const sElemFn = (elem, ev, fn) => document.querySelector(elem).addEventListener(ev, fn);

/**
* @param {Element} classe 
*/
export const seleKlass = classe => document.getElementsByClassName(classe);
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
    const { style } = document.querySelector('aside'), pos = [`translateX(${px}px)`, 'translateX(0)'];
    style.transform = pos[0];
    document.getElementById(id).addEventListener('click', () => style.transform = (style.transform == pos[0]) ? pos[1] : pos[0]);
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

export function kreatto() {
    [...arguments].forEach(arg => {
        for (let elem in arg) {
            const res = [];
            for (let tag of arg[elem]) { // Cria os componentes
                res.push(document.createElement(typeof tag === 'string' ? tag : Object.keys(tag)));
                res.forEach((el, i) => {
                    if (typeof arg[elem][i] === 'object') {
                        for (let key in arg[elem][i]) // Caso sejam objetos aninhados, adiciona os atributos
                            Object.entries(arg[elem][i][key]).forEach(([atr, val]) => el.setAttribute(atr, val));
                    }
                });
                document.querySelector(elem).append(...res);
            }
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

// IMPORTANTE! --> Sempre usar o templatr no topo do código!

export function templatr() {
    const { body } = document, res = [];
    [...arguments].forEach(elem => res.push(document.createElement(typeof elem === 'string' ? elem : Object.keys(elem))));
    res.forEach((el, i) => {
        if (typeof arguments[i] === 'object') {
            for (let tag in arguments[i])
                Object.entries(arguments[i][tag]).forEach(([atr, val]) => el.setAttribute(atr, val));
        }
    });
    body.append(...res);
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/** 
* @param {object} arguments
* @param {string} arguments.id - local do texto 
* @param {string} arguments.texto 
*/
export function texto() {
    [...arguments].forEach(({ id, texto }) => document.getElementById(id).innerHTML = texto);
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

export class Animatus {
    static barr(id, pxMax, vel) {
        const { style } = document.getElementById(id);
        let px = 0;
        setInterval(() => {
            arguments[3] == 'loop'
                ? (px != pxMax) ? style.width = `${px++}px` : px = 0
                : (style.width != `${pxMax}px`) ? style.width = `${px++}px` : '';
        }, vel);
    }

    static girar(id, z, vel) {
        const { style } = document.getElementById(id);
        let ang = 0;
        setInterval(() => (ang != z) ? style.transform = `rotateZ(${ang++}deg)` : ang = 0, vel);
    }
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

export function dropDown() {
    [...arguments].forEach(drop => {
        let items = [], local = document.getElementById(drop.local);

        local.hidden = true;

        for (let x in drop.lista) items.push(drop.lista[x]);

        local.innerHTML = items.join(' ');

        document.querySelector(drop.btn).onclick = () => local.hidden = local.hidden == true ? false : true;
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

export function replacer() {
    [...arguments].forEach(pesq => {
        for (let local in pesq) {
            for (let res in pesq[local]) {
                let str = document.querySelector(local);
                str.innerHTML = str.innerHTML.replace(`{{${res}}}`, pesq[local][res]);
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
 * @param {string | object} arguments.el
 */
export function criarLista([_local, _lista, _el]) {
    [...arguments].forEach(lista => {
        let res;
        lista[1].forEach(item => {
            for (let tag in lista[2]) {
                for (let key in lista[2][tag]) {
                    res = (typeof lista[2] == 'object')
                        ? `<${tag} ${key}="${lista[2][tag][key]}">${item}</${tag}>`
                        : `<${lista[2]}>${item}</${lista[2]}>`;
                }
            }
            document.getElementById(lista[0]).innerHTML += res;
        });
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/*
 * Gera um id numérico para a classe
 * Sintaxe -> [classe, id]
 */
export function addId() {
    [...arguments].forEach(el => {
        let cl = [...document.getElementsByClassName(el[0])];

        for (let id in cl) cl[id].id = `${el[1] + id}`;
    });
}
/* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} classe 
 * @param {number} qtde 
 * @param {string} id
 * @param {string} local
 * @param {string} tag
 */
export function grid(classe, qtde, id, local, tag) {
    let el = document.getElementById(local);
    el.classList += 'grid';
    for (let i = 0; i < qtde; i++) {
        el.innerHTML += `<${tag} class="${classe}"></${tag}>`;
        if (arguments.length >= 3) [...document.getElementsByClassName(arguments[0])][i].id = `${id}${i}`;
    }
} /* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} local 
 * @param {string} classeCol 
 * @param {string} classeFila 
 * @param {object[]} tabela 
 */
export function criarTabela(local, classeCol, classeFila, tabela) {
    const tab = document.getElementById(local), col = [], { style } = tab;

    for (let x in tabela) {
        let row = [];
        for (var y in tabela[x]) {
            row.push(`<p class="${classeFila}">${tabela[x][y]}</p>`);
        }
        col.push(`<div class="${classeCol} "> <p class="${classeFila} tabCol">${x}</p> ${row.join('\n')}</div>`);
    }

    style.display = 'flex';
    style.width = 'fit-content';
    tab.innerHTML += col.join('\n');
} /* --------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string[]} urls
 */
export function addCSS([_urls]) {
    [...arguments].forEach(url => document.head.innerHTML += `<link rel="stylesheet" href="${url}">`);
}

/**
* @param {object | string} elem 
* @param {string} conteúdo
*/
export function render(elem, conteúdo) {
    for (let tag in elem) {
        let atr = [];
        for (let key in elem[tag])
            atr.push(`${key}="${elem[tag][key]}"`);
        return (typeof elem == 'object') ? `<${tag} ${atr.join(' ')}> ${conteúdo} </${tag}>` : `<${elem}> ${conteúdo} </${elem}>`;
    }
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {object} arguments
 * @param {string} arguments._local 
 * @param {string | object} arguments._tag 
 * @param {number} arguments._qtde
 */
export function Container([_local, _tag, _qtde, _idContainer, _idComponente]) {
    [...arguments].forEach(arg => {
        const res = [], container = document.createElement('section');

        for (let elem = 0; elem < arg[2]; elem++) // Cria os componentes
            res.push(document.createElement(typeof arg[1] === 'string' ? arg[1] : Object.keys(arg[1])));

        if (typeof arg[1] === 'object') {
            let ctrlId = 0;

            res.forEach(el => {
                if (arg.length == 5) el.id = arg[4] + ctrlId++;

                for (let key in arg[1])
                    Object.entries(arg[1][key]).forEach(([atr, val]) => el.setAttribute(atr, val));
            });
        }

        container.classList = ' container ';
        container.id = arg[3];
        container.append(...res);

        document.querySelector(arg[0]).appendChild(container);
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/**
 * @param {string} local 
 */
export function SearchBox(local) {
    const searchBox = document.createElement('section');
    searchBox.classList = 'searchBox';
    searchBox.append(...['input', 'button'].map(elem => document.createElement(elem)));

    document.querySelector(local).appendChild(searchBox);

    if (typeof arguments[1] === "object") {
        for (let el in arguments[1]) {
            for (let atr in arguments[1][el])
                document.querySelector(el)[atr] = arguments[1][el][atr];
        }
    }
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

console.log(`Lib 7 v${versão} - Matsa \u00A9 2021\nCriada por Josias Fontes Alves`);