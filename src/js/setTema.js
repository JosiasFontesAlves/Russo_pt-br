import { consumirAPI, httpPost, temEsc, toggle } from "./lib7.js";

export default () => {
    consumirAPI('temesc.json', ({ temEsc }) => {
        if (temEsc) toggle({ body: 'temesc', '#btn-temesc': 'x30' });
    });

    temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
        toggle({ [`#${target.id}`]: 'x30' });

        httpPost('/tema', { temEsc: target.classList.contains('x30') });
    });
}