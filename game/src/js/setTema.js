import { addClass, consumirAPI, httpPost, temEsc, toggle } from './lib7.js';

export default () => consumirAPI('api.json', api => {
    if (api.temEsc) {
        addClass('#btn-temesc', ['x30']);

        ['body', '#copyright'].forEach(el => addClass(el, ['temesc']));
    }

    temEsc('btn-temesc', ['body', 'footer', '#copyright'], 'temesc', ({ target: { id } }
        ) => {
        api.temEsc = toggle(`#${id}`, 'x30');

        httpPost('api', api);
    });
});