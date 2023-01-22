/**
 * * * * * * * * * * * * *     * * * * * * * * *    * * * * * * * * * *    * * * * * * * * *     * * * * * * * * * * 
 * * * * * * * * * * * * *     * * * * * * * * *    * * * * * * * * * *    * * * * * * * * *     * * * * * * * * * * 
 * *                   * *     * *           * *            * *            * *                   * *             * *  
 * *        * *        * *     * * * * * * * * *            * *            * * * * * * * * *     * *     * *     * * 
 * *        * *        * *     * * * * * * * * *            * *            * * * * * * * * *     * *     * *     * * 
 * *        * *        * *     * *           * *            * *                          * *     * *             * * 
 * *        * *        * *     * *           * *            * *            * * * * * * * * *     * *             * * 
 * *        * *        * *     * *           * *            * *            * * * * * * * * *     * *             * * 
 * @author Josias Fontes Alves
*/

let versão = '5.1.8';

/**
 * @param {{[tag: string]: {[prop: string]: string | number}} | string} tag
 * @param {string | Node | Node[]} [childs]
 */
export const render = (tag, childs) => {
    const $elem = document.createElement(typeof tag === 'string' ? tag : Object.keys(tag)[0]);

    if (typeof tag === 'object')
        Object.entries(...Object.values(tag)).forEach(([prop, val]) => $elem[prop] = val);

    if (childs)
        Array.isArray(childs) ? childs.forEach(item => $elem.append(item)) : $elem.append(childs);

    return $elem;
}

export const Btn = (/** @type {{[prop: string]: string}[]} */ ...props) => {
    const [button, border] = ['button', 'div'].map((elem, i) => render({ [elem]: { ...props[i] } }));

    button.style.margin = '1px';

    border.appendChild(button);

    return props.length == 2 ? border : button;
}

export const Tempus = (() => {
    const Elem = (props, fn) => {
        const elem = render({ p: { ...props } });

        setInterval(() => elem.textContent = fn(), 1000);

        return elem;
    }

    return {
        /**
         * @param {number} style 0 - 1
         * @param {{[prop: string]: string}} [props]
         */
        clock: (style, props) =>
            Elem(props, () => {
                const rlg = new Date().toLocaleTimeString();

                return style == 1 ? rlg.match(/\d{2}:\d{2}/)[0] : rlg;
            }),
        /**
         * @param {number} style 0 - 2
         * @param {{[prop: string]: string}} [props]
         */
        calendar: (style, props) => {
            const getCal = {
                day: {
                    Sun: 'DOM', Mon: 'SEG', Tue: 'TER', Wed: 'QUA',
                    Thu: 'QUI', Fri: 'SEX', Sat: 'SÁB'
                },
                month: {
                    Jan: 'JAN', Feb: 'FEV', Mar: 'MAR', Apr: 'ABR',
                    May: 'MAI', Jun: 'JUN', Jul: 'JUL', Aug: 'AGO',
                    Sep: 'SET', Oct: 'OUT', Nov: 'NOV', Dec: 'DEZ'
                }
            };

            return Elem(props, () => {
                const [weekDay, month, day, year] = String(new Date()).match(/\w+/g);

                const styles = [
                    `${getCal.day[weekDay]} ${day} ${getCal.month[month]} ${year}`,
                    `${day}/${getCal.month[month]}/${year}`,
                    new Date().toLocaleDateString()
                ];

                return styles[style];
            }, 1000);
        },
        /**
         * @param {number} start
         * @param {number} end
         * @param {number} vel
         * @param {{[prop: string]: string}} [props]
         */
        timer: ({ start, end }, vel = 1000, props) => {
            const Timer = render({ p: { ...props } });

            const setTimer = setInterval(() => {
                end
                    ? start < end ? start++ : clearInterval(setTimer)
                    : start > 0 ? start-- : clearInterval(setTimer);

                Timer.textContent = String(start);
            }, vel);

            return Timer;
        }
    }
})(); /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const selek = (/** @type {string[]} */ ...elems) =>
    (elems.length === 1)
        ? document.querySelector(elems[0])
        : elems.map(elem => document.querySelector(elem));

/**
 * @param {string} id
 * @param {string} ev
 * @param {EventListener} fn
 */
export const selekFn = (id, ev, fn) => document.querySelector(id)?.addEventListener(ev, fn);

/**
 * @param {string} classe
 */
export const seleKlass = classe => [...document.getElementsByClassName(classe)];
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const templatr = (/** @type {Node[]} */ ...childs) => document.querySelector('body')?.append(...childs);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string[]} lista
 * @param {{[prop: string]: string}} [props] 
 * @param {{[prop: string]: string}} [propsChilds]
 */
export const DropDown = (lista, props, propsChilds) => {
    const drop = render({
        select: {
            ...props
        }
    }, lista.map(textContent =>
        render({ option: { textContent, ...propsChilds } })
    ));

    drop.classList.add('drop');

    return drop;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} str
 * @param {string | RegExp} search
 * @param {string | number} replace
 */
export const replacer = (str, search, replace) => str.replace(search, replace);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string[]} lista
 * @param {{[prop: string]: string}} [props]
 * @param {{[prop: string]: string}} [propsChilds]
 */
export const Lista = (lista, props, propsChilds) =>
    render({
        ul: {
            ...props
        }
    }, lista.map(item =>
        render({ li: { ...propsChilds } }, item)
    ));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const Tabela = (/** @type {{}[]}*/ data, /** @type {{[prop: string]: string }} */ props) => {
    const Thead = render('thead', Object.keys(...data).map(item => render('th', item)));

    const items = Object.values(data).map((item) =>
        render('tr', Object.values(item).map(text => render('td', text)))
    );

    return render({
        table: {
            ...props
        }
    }, [
        Thead,
        render('tbody', items)
    ]);
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[prop: string]: string}[]} props
 */
export const SearchBox = (...props) => {
    const searchBox = render({ 'section': { ...props[2] } });
    searchBox.classList.add('searchBox');

    ['input', 'button'].forEach((el, i) => {
        const child = render({ [el]: props[i] });

        searchBox.appendChild(child);
    });

    return searchBox;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const AJAX = {
    get: async (/** @type {string} */ url) => {
        const api = await fetch(url);

        return await api.json();
    },
    set: (/** @type {string} */ url, /** @type {{} | *[]} */ body) =>
        fetch(url, {
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }),
    update: async (/** @type {string} */ file, /** @type {string} */ url, /** @type {{[key: string]: *}} */ keys) => {
        const api = await AJAX.get(file);

        Object.entries(keys).forEach(([key, val]) => api[key] = val);

        AJAX.set(url, api);
    }
}; /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const insertChilds = (/** @type {string} */ local, /** @type {HTMLElement[] | HTMLElement} */ childs) => {
    const $local = document.querySelector(local);

    Array.isArray(childs) ? childs.forEach(child => $local.append(child)) : $local.append(childs);
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} href
 * @param {string} textContent
 * @param {{[prop: string]: string}} [props]
 */
export const Link = (href, textContent, props) => {
    const link = render({ a: { ...props, href, textContent } });
    link.classList.add('link');

    return link;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[item: string]: any}} obj
 * @param {(value: [string, any], index: number, array: [string, any][]) => any} callBack
 */
export const mapEntries = (obj, callBack) => Object.entries(obj).map(callBack);

/**
 * @param {{[item: string]: any}} obj
 * @param {(value: string, index: number, array: string[]) => any} callBack
 */
export const mapKeys = (obj, callBack) => Object.keys(obj).map(callBack);

/**
 * @param {{[item: string]: any} | *[]} obj
 * @param {(value: [string, any], index: number, array: [string, any][]) => any} callBack
 */
export const mapValues = (obj, callBack) => Object.values(obj).map(callBack);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getEntries = (/** @type {{ [s: string]: any; } | ArrayLike<any>} */ obj) => Object.entries(obj);

export const getKeys = (/** @type {{}} */ obj) => Object.keys(obj);

export const getValues = (/** @type {{ [s: string]: any; } | ArrayLike<any>} */ obj) => Object.values(obj);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{}} obj
 * @param {(previousValue: {}, currentValue: [string, any], currentIndex: number, array: [string, any][])} callBack
 * @param {*} initialValue
 */
export const reduceEntries = (obj, callBack, initialValue) => Object.entries(obj).reduce(callBack, initialValue);

/**
 * @param {{}} obj
 * @param {(previousValue: {}, currentValue: [string, any], currentIndex: number, array: [string, any][])} callBack
 * @param {*} initialValue
 */
export const reduceValues = (obj, callBack, initialValue) => Object.values(obj).reduce(callBack, initialValue);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[href: string]: string}} links
 * @param {{[prop: string]: string}} [propsNav]
 * @param {{[prop: string]: string}} [propsChilds]
 */
export const LinkBar = (links, /** @type {{ [prop: string]: string; }} */ propsNav, /** @type {{ [prop: string]: string; }} */ propsChilds) => {
    const linkBarr = render({ nav: { ...propsNav } });

    const $links = Object.entries(links).map(([href, textContent]) => {
        const link = render({
            a: {
                ...propsChilds,
                href, textContent
            }
        });

        link.classList.add('link');

        return link;
    });

    linkBarr.classList.add('linkBar');
    linkBarr.append(...$links);

    return linkBarr;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {number} size - 1 - 6
 * @param {string} textContent
 * @param {{[prop: string]: string}} [props]
 */
export const Title = (size, textContent, props) => render({ [`h${size}`]: { ...props, textContent } });
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} src
 * @param {string} alt
 * @param {{[prop: string]: string | number}} [props]
 */
export const Img = (src, alt, props) => render({ img: { ...props, src, alt } });
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[elem: string]: string}} elems
 * @returns {boolean}
 */
export const toggle = elems => {
    let force;

    Object.entries(elems).forEach(([el, toggle]) =>
        force = document.querySelector(el).classList.toggle(toggle)
    );

    return force;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[prop: string]: string}} [props]
 * @param {{[prop: string]: string}} [propsChilds]
 */
export const Burger = (props, propsChilds) => {
    const burger = render({ div: { ...props, style: 'display: grid; gap: 2px;' } });

    Array.from({ length: 3 }, () => {
        const btn = render({ button: { ...propsChilds } });
        btn.classList.add('btn_burger');

        return btn;
    }).forEach(child => burger.appendChild(child));

    burger.classList.add('burger');

    return burger;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * Retorna um item aleatório de um array ou string
 */
export const getRandomItem = (/** @type {string | any[]} */ arr) => arr[Math.floor(Math.random() * arr.length)];
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} str
 * @param {string | RegExp} start
 * @param {string} [end] 
 */
export const getSubstring = (str, start, end) =>
    (typeof start === 'string')
        ? end
            ? str.substring(str.indexOf(start), str.indexOf(end))
            : str.substring(str.indexOf(start))
        : str.match(start);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {string} texto
 * @param {{ [prop: string]: string; }} [props]
 */
export const Span = (texto, props) => render({ span: { ...props } }, texto);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{[route: string]: HTMLElement}} routes
 * @param {{ [prop: string]: string; }} [props]
 * @param {function} [fn]
 */
export const Router = (routes, props, fn) => {
    const Route = render({ div: { ...props } });
    Route.classList.add('router');

    const setContent = (route, ev) => {
        Route.innerHTML = '';

        Route.append(routes[route] ?? '');

        if (fn) fn(location, ev);
    }

    setContent('/');

    window.addEventListener('hashchange', ev => setContent(location.hash, ev));

    window.addEventListener('click', ev => {
        const { href, localName } = ev.target;

        if (localName !== 'a') return;

        const route = href.split(location.host)[1];

        if (!Object.keys(routes).includes(route)) return;

        ev.preventDefault();

        setContent(route, ev);

        history.replaceState('', '', route);
    });

    return Route;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const splitArray = (/**@type {any[]}*/ arr, /**@type {number}*/ length) => {
    const $arr = [...arr], res = [];

    let items = Math.ceil($arr.length / length);

    while (length) res[--length] = $arr.splice(length * items);

    return res.filter(({ length }) => length);
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {HTMLElement[]} arr
 * @param {number} length - divisão do array
 * @param {string} key - chave do objeto
 * @param {{ [prop: string]: string; }} [props]
 * @param {{ [prop: string]: string; }} [propsLinks]
 */
export const paginatr = (arr, length, key, props, propsLinks) => {
    const Page = childs => render({ section: { ...props } }, childs),
        Link = (href, textContent) => render({ a: { href, ...propsLinks } }, textContent + 1);

    const $arr = [...arr],
        routes = splitArray($arr, length)
            .map(childs => Page(childs))
            .reduce((acc, item, i) => ({ ...acc, [`${key + i}`]: item }), {});

    const Links = render({
        nav: {
            className: 'nav_paginatr'
        }
    }, Object.keys(routes).map(Link));

    return [routes, Links];
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * @param {{ [prop: string]: string; }} [propsBtn]
 * @param {{ [prop: string]: string; }} [propsCounter]
 */
export const Counter = (propsBtn, propsCounter) => {
    const onclick = ({ target }) => {
        const setNum = {
            decr: num => num > 0 ? num - 1 : 0,
            incr: num => num + 1
        }

        const fn_num = target.className.match(/(?:de|in)cr/)[0];

        SpanBtn.textContent = setNum[fn_num](Number(SpanBtn.textContent));
    }

    const SpanBtn = render({ span: { className: 'span_counter' } }, '0');
    const Btn = (fn, textContent) => {
        const btn = render({
            button: { ...propsBtn, onclick, textContent }
        });

        btn.classList.add('btn_counter', fn);

        return btn;
    }

    const [Decr, Incr] = Object.entries({
        decr: '-', incr: '+'
    }).map(([fn, textContent]) => Btn(fn, textContent));

    const counter = render({
        section: { ...propsCounter }
    }, [Decr, SpanBtn, Incr]);

    counter.classList.add('counter');

    return counter;
} /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

console.log(`Lib 7 v${versão} - Matsa \u00A9 2020 - ${new Date().getFullYear()}\nCriada por Josias Fontes Alves`);