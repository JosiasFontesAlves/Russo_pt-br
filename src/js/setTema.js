import { addClass, consumirAPI, httpPost, mapEntries, temEsc, toggle } from "./lib7.js";

export default () => {
    consumirAPI('temesc.json', ({ temEsc }) => {
        if (temEsc) {
            mapEntries({
                temesc: 'body', x30: '#btn-temesc'
            }, ([classe, el]) => addClass(el, [classe]));
        }
    });

    temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
        toggle(`#${target.id}`, 'x30');

        httpPost('/tema', { temEsc: target.classList.contains('x30') });
    });
}