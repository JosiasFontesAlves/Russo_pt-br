import { consumirAPI, sElem, temEsc } from "./lib7.js";

export default () => {
    consumirAPI('/temesc.json', ({ temEsc }) => {
        const [btnTemesc, main, body] = ['#btn-temesc', 'main', 'body'].map(el => sElem(el));

        if (temEsc) {
            btnTemesc.classList.add('posX_30');
            [main, body].map(({ classList }) => classList.add('temEsc'));
        }
    });

    temEsc('btn-temesc', ['body', 'main'], 'temEsc', ({ target }) => {
        target.classList.toggle('posX_30');

        fetch('/tema', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temEsc: target.classList.contains('posX_30') }, null, 4)
        });
    });
}