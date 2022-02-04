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

let versão = '3.6.7';

/**
 * @param {string} idBtn
 * @param {number} estilo 
 * @param {string | string[]} cor
 */
export function Btn(idBtn, estilo, cor) {
    const setCor = (i, bg) => Array.isArray(cor) ? cor[i] : bg,
        props = [
            `background: ${cor[1]}; border: 2px solid; padding: 2px; height: 20px; width: 50px;`,
            `background: ${setCor(0, cor)}; border: none; height: inherit; width: 20px;`,
            `background: ${setCor(1, '#d8d8d8')};`
        ],
        btn = {
            div: [
                `${props[0]} border-radius: 15px;`, props[0], `${props[0]} border-radius: 7px;`,
                `${props[2]}; height: 15px; border-radius: 10px; display: flex; align-items: center; width: 50px;`,
                `${props[2]}; border-radius: 25px; border: 1px solid; height: 20px; width: 50px;`,
                `${props[2]}; border: 2px solid; border-radius: 25px; height: 20px; padding: 5px; width: 55px;`
            ],
            button: [
                `${props[1]} border-radius: inherit;`, props[1], `${props[1]} border-radius: 5px`,
                `background: ${setCor(0, cor)}; border: none; border-radius: 50%; height: 25px; width: 25px`,
                `width: 20px; border: 5px solid ${setCor(0, cor)}; background: none; border-radius: 50%; height: inherit;`,
                `${props[1]} border-radius: 50%;`
            ]
        },
        [borda, botão] = ['div', 'button'].map(elem => {
            const el = document.createElement(elem);
            el.style = btn[elem][estilo];
            return el;
        });

    botão.id = idBtn;
    borda.style.display = 'flex';

    Object.entries({
        cursor: 'pointer',
        'margin-left': '-1px',
        position: 'fixed'
    }).forEach(([prop, val]) => botão.style[prop] = val);

    borda.appendChild(botão);

    return borda;
} /* ----- Lib de botões ----- */

export const Tempus = {
    /**
     * @param {string} id 
     * @param {number} [estilo] 
     */
    relógio(id, estilo) {
        const rel = document.createElement('p');
        rel.id = id ?? 'tempus-rlg';

        setInterval(() => {
            const date = new Date();
            const rlg = [
                date.getHours(), date.getMinutes(), date.getSeconds()
            ].map(num => num < 10 ? `0${num}` : num);

            if (estilo === 1) rlg.pop();

            rel.textContent = rlg.join(':');
        }, 1000);

        return rel;
    },
    /**
     * @param {string} id 
     * @param {number} [estilo]
     */
    calendário(id, estilo) {
        const cal = document.createElement('p');
        cal.id = id ?? 'tempus-cal';

        setInterval(() => {
            const date = new Date();

            const calendário = {
                diaSem: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
                mês: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
            }, estilos = [
                `${calendário.diaSem[date.getDay()]} ${date.getDate()} ${calendário.mês[date.getMonth()]} ${date.getFullYear()}`,
                `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            ];

            cal.textContent = estilos[estilo];

        }, 1000);

        return cal;
    },
    /**
     * @param {string} id 
     */
    saudação(id) {
        const sdc = document.createElement('p'),
            hora = new Date().getHours();

        sdc.id = id ?? 'tempus-sdc';
        sdc.textContent = (hora <= 12) ? "Bom dia!" : (hora >= 18) ? "Boa noite!" : "Boa tarde!";

        return sdc;
    },
    /**
     * @param {number} start
     * @param {number} end
     * @param {number} vel
     */
    contador([start, end], vel) {
        const res = document.createElement('p'),
            count = setInterval(() => (start <= end) ? res.textContent = start++ : clearInterval(count), vel);

        return res;
    }
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string | string[]} id 
 * @returns {HTMLElement | HTMLElement[]}
 */
export const selek = (...id) => id.length > 1 ? id.map(el => document.getElementById(el)) : document.getElementById(id);

/**
 * @param {Element} elem 
 */
export const sElem = elem => document.querySelector(elem);

/**
 * @param {string} id 
 * @param {EventListener} ev 
 * @param {function} fn 
 */
export const selekFn = (id, ev, fn) => document.getElementById(id).addEventListener(ev, fn, false);

/**
 * @param {Element} elem 
 * @param {EventListener} ev 
 * @param {function} fn 
 */
export const sElemFn = (elem, ev, fn) => document.querySelector(elem).addEventListener(ev, fn, false);

/**
 * @param {string} classe 
 */
export const seleKlass = classe => [...document.getElementsByClassName(classe)];
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} btn - Botão que será responsável pelo evento
 * @param {string[]} elems - Elementos que serão alterados pelo toggle
 * @param {string} toggle - Classe CSS que será responsável pelo tema escuro
 * @param {function} [fn] - Callback opcional
 */
export const temEsc = (btn, elems, toggle, fn) => document.getElementById(btn).addEventListener('click', ev => {
    elems.map(elem => document.querySelector(elem).classList.toggle(toggle));

    if (fn) fn(ev);
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} id - id do menu
 * @param {string} btn - Botão que será responsável pelo evento
 * @param {string} toggle - Classe CSS que será responsável por esconder o menu
 */
export const menuLateral = (id, btn, toggle) =>
    document.getElementById(btn).addEventListener('click', () => document.querySelector(id).classList.toggle(toggle));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {HTMLElement[]} elems 
 */
export const templatr = elems => elems.forEach(tag => document.body.appendChild(tag));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/** 
 * @param {{id: string}} tags - { id: texto }
 */
export const texto = tags => Object.entries(tags).forEach(([tag, texto]) => document.getElementById(tag).textContent = texto);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export class Animatus {
    static barr(id, pxMax, vel) {
        const { style } = document.getElementById(id);
        let px = 0;
        setInterval(() => {
            arguments[3] == 'loop' ?
                (px != pxMax) ? style.width = `${px++}px` : px = 0 :
                (style.width != `${pxMax}px`) ? style.width = `${px++}px` : '';
        }, vel);
    }

    static girar(id, z, vel) {
        const { style } = document.getElementById(id);
        let ang = 0;
        setInterval(() => (ang != z) ? style.transform = `rotateZ(${ang++}deg)` : ang = 0, vel);
    }
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} id 
 * @param {string[]} lista
 */
export function DropDown(id, lista) {
    const drop = document.createElement('select');
    drop.id = id;
    drop.classList.add('drop');

    lista.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;

        drop.appendChild(option);
    });

    return drop;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export function replacer() {
    [...arguments].forEach(pesq => {
        for (let local in pesq) {
            for (let res in pesq[local]) {
                let str = document.querySelector(local);
                str.innerHTML = str.innerHTML.replace(`{{${res}}}`, pesq[local][res]);
            }
        }
    });
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export function jacss(...args) {
    args.forEach(elems => {
        Object.entries(elems).forEach(([tag, props]) => {
            const el = document.querySelector(tag);

            for (let prop in props)
                el.style[prop] = props[prop];
        });
    });
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} id 
 * @param {string[]} lista 
 * @param {{prop: string}} [props]
 */
export const Lista = (id, lista, props) => {
    const { createElement } = document;
    const $lista = createElement('ul');
    $lista.id = id;

    lista.forEach((item, i) => {
        const li = createElement('li');
        li.id = `${id}-${i}`;
        li.append(item);

        if (props) {
            Object.entries(props).forEach(([prop, val]) => li.setAttribute(prop, val));
        }

        $lista.appendChild(li);
    });

    return $lista;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} id
 * @param {object[]} tabela
 */
export const Tabela = (id, tabela) => {
    const [table, thead, tbody] = ['table', 'thead', 'tbody'].map(el => document.createElement(el));
    const $render = (tag, content) => {
        const el = document.createElement(tag);
        el.append(...content);

        return el;
    }

    const Tr = data => $render('tr', data);

    table.id = id;

    const Head = Tr(Object.keys(...tabela).map(th => $render('th', th)));
    thead.appendChild(Head);

    const Body = tabela.flatMap(tab => [
        Object.values(tab).map(dado => {
            const Td = document.createElement('td');
            Td.append(dado);

            return Td;
        })
    ].map(row => Tr(row)));

    tbody.append(...Body)

    table.append(thead, tbody);

    return table;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param { { tag: { prop: string } } | string} tag
 * @param {HTMLElement | HTMLElement[] | string} [conteúdo]
 */
export function render(tag, conteúdo) {
    const elem = document.createElement(typeof tag === 'string' ? tag : Object.keys(tag)[0]);

    if (typeof tag === 'object') {
        for (let el in tag) Object.entries(tag[el]).forEach(([atr, val]) => elem.setAttribute(atr, val));
    }

    if (conteúdo) {
        Array.isArray(conteúdo) ? conteúdo.map(item => elem.append(item)) : elem.append(conteúdo);
    }

    return elem;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {object} props
 */
export function SearchBox(...props) {
    const searchBox = document.createElement('section');
    searchBox.classList.add('searchBox');

    ['input', 'button'].map((el, i) => {
        const child = document.createElement(el);

        if (Array.isArray(props))
            Object.entries(props[i]).map(([atr, val]) => child.setAttribute(atr, val));

        searchBox.appendChild(child);
    });

    return searchBox;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} idForm
 */
export function FormBox(idForm) {
    const form = document.createElement('form');
    if (idForm) form.id = idForm;

    const inputs = ['text', 'password'].map(type => {
        const input = document.createElement('input');
        input.type = type;

        return input;
    });

    form.append(...inputs, document.createElement('button'));

    return form;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} url 
 * @param {function} fn 
 */
export async function consumirAPI(url, fn) {
    const api = await fetch(url);
    const res = await api.json();

    fn(res);
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{ hash: HTMLElement | function }} pages
 * @param {function} fn
 */
export const SPA = (pages, fn) => window.addEventListener('hashchange', e => fn(pages, e));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} local 
 * @param {HTMLElement[]} childs 
 */
export const insertChilds = (local, childs) => document.querySelector(local).append(...childs);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{ prop: string }} props - props do slider
 * @param {string[]} urlFotos 
 */
export const Slider = (props, urlFotos) => {
    const $render = el => document.createElement(el),
        setStyle = (el, props) => Object.entries(props).map(([atr, val]) => el.style[atr] = val),
        setFtAtual = ft => {
            img.src = urlFotos[ft];

            [
                [prev, (ftAtual === 0)], [next, (ftAtual >= urlFotos.length - 1)]
            ].forEach(([btn, cond]) => btn.disabled = cond ? true : false);
        }

    const [slider, img] = ['section', 'img'].map(el => $render(el));

    if (typeof props === 'object')
        Object.entries(props).map(([atr, val]) => slider.setAttribute(atr, val));

    setStyle(slider, { display: 'flex', alignItems: 'center' });

    const [prev, next] = [['prev', '<', 35], ['next', '>', -35]].map(([id, txt, pos]) => {
        const btn = $render('button');
        setStyle(btn, { transform: `translateX(${pos}px)`, height: 'fit-content' });

        Object.entries({
            textContent: txt,
            classList: 'btn_slider',
            id: id
        }).map(([atr, val]) => btn[atr] = val);

        return btn;
    });

    let ftAtual = 0;

    setFtAtual(ftAtual);

    slider.append(prev, img, next);

    [[prev, -1], [next, 1]].map(([btn, fn]) => btn.addEventListener('click', () => setFtAtual(ftAtual += fn)));

    return slider;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} id
 */
export const Cookr = id => {
    const data = {};

    return {
        id,
        /**
         * @param {string} [item] - nome da chave a ser pesquisada
         */
        getData: item => data[item] || data,
        /**
         * @param {{data}} content - chave a ser inserida no objeto
         */
        setData: content => Object.entries(content).forEach(([key, val]) => data[key] = val)
    }
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} href 
 * @param {string} textContent
 * @param {{ prop: string}} [props] 
 */
export const Link = (href, textContent, props) => {
    const link = document.createElement('a');
    link.textContent = textContent;
    link.href = href;

    if (props && typeof props === 'object') {
        Object.entries(props).forEach(([prop, val]) => link.setAttribute(prop, val));
    }

    return link;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

console.log(`Lib 7 v${versão} - Matsa \u00A9 2020 - ${new Date().getFullYear()}\nCriada por Josias Fontes Alves`);