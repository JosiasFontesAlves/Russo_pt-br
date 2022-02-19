import { consumirAPI, httpPost, selek, sElem, temEsc } from './lib7.js';

export default () => consumirAPI('api.json', api => {
    if (api.temEsc) {
        selek('btn-temesc').classList.add('x30');

        ['body', '#copyright'].forEach(el => sElem(el).classList.add('temesc'));
    }

    temEsc('btn-temesc', ['body', 'footer'], 'temesc', ({ target }) => {
        api.temEsc = target.classList.toggle('x30');

        httpPost('api', api);
    });
});