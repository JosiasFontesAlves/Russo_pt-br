import { consumirAPI, httpPost, sElem, temEsc } from "./lib7.js";

export default () => {
    consumirAPI('/temesc.json', ({ temEsc }) => {
        const [btnTemesc, body] = ['#btn-temesc', 'body'].map(el => sElem(el));

        if (temEsc) {
            btnTemesc.classList.add('posX_30');
            body.classList.add('temEsc');
        }
    });

    temEsc('btn-temesc', ['body'], 'temEsc', ({ target }) => {
        target.classList.toggle('posX_30');

        httpPost('/tema', { temEsc: target.classList.contains('posX_30') });
    });
}