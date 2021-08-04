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

let versão = '2.5';

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

            for (let x in rlg) rlg[x] < 10 ? rlg[x] = `0${rlg[x] - 1}` : '';

            const rel = [rlg.join(':'), (rlg.pop(), rlg.join(':'))];

            document.getElementById(`${idRel}`).innerHTML = rel[estilo];
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
            }

            const cal = [
                `${calendário.diaSem[data.getDay()]} ${data.getDate()} ${calendário.mês[data.getMonth()]} ${data.getFullYear()}`,
                `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
            ];
            
            document.getElementById(`${idCal}`).innerHTML = cal[estilo];
        }, 500);
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

export function kreatto() {
    [...arguments].forEach(tag => {
        for (let key in tag) {
            for (let value in tag[key]) {
                let res, atr = [];
                for (let k in tag[key][value]) {
                    for (let v in tag[key][value][k]) {
                        atr.push(`${v}="${tag[key][value][k][v]}"`);
                        res = (typeof tag[key][value] == 'object') ? `<${k} ${atr.join(' ')}></${k}>` : `<${tag[key][value]}></${tag[key][value]}>`;
                    }
                }
                document.querySelector(key).innerHTML += res;
            }
        }
    });
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

// IMPORTANTE! --> Sempre usar o templatr no topo do código!

export function templatr() {
    const { body } = document;
    [...arguments].forEach(elem => {
        let atr = [], res;
        for (let tag in elem) {
            for (let key in elem[tag])
                atr.push(`${key}="${elem[tag][key]}"`);

            res = typeof elem == 'string' ? `<${elem}></${elem}>` : `<${tag} ${atr.join(' ')}></${tag}>`;
        }
        body.innerHTML += res;
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
    static barr(id, pxMax, vel) {
        const { style } = document.getElementById(id);
        let px = 0;
        setInterval(() => (style.width != `${pxMax}px`) ? style.width = `${px++}px` : '', vel);
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

        document.querySelector(drop.btn).onclick = () => local.hidden == true ? local.hidden = false : local.hidden = true;
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
 * @param {string} arguments.el
 */
export function criarLista([_local, _lista, _el]) {
    [...arguments].forEach(x => x[1].forEach(l => document.getElementById(x[0]).innerHTML += `<${x[2]}> ${l} </${x[2]}>`));
} /* ----------------------------------------------------------------------------------------------------------------------------------------- */

/*
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
*/
export function render(elem, conteúdo) {
    for (let tag in elem) {
        let atr = [];

        for (let key in elem[tag])
            atr.push(`${key}="${elem[tag][key]}"`);

        return (typeof elem == 'object') ? `<${tag} ${atr.join(' ')}> ${conteúdo} </${tag}>` : `<${elem}> ${conteúdo} </${elem}>`;
    }
}

console.log(`Lib 7 v${versão} - Matsa \u00A9 2021\nCriada por Josias Fontes Alves`);