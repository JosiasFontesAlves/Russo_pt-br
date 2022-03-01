import { consumirAPI, httpPost, sElem, temEsc, toggle } from "./lib7.js";

export default () => {
    consumirAPI('/temesc.json', ({ temEsc }) => {
        const [btnTemesc, body] = ['#btn-temesc', 'body'].map(el => sElem(el));

        if (temEsc) {
            btnTemesc.classList.add('x30');
            body.classList.add('temesc');
        }
    });

    temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
        toggle(`#${target.id}`,'x30');

        httpPost('/tema', { temEsc: target.classList.contains('x30') });
    });
}