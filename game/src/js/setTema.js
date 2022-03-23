import { addClass, mapEntries, temEsc, toggle } from './lib7.js';
import setAPI from './setAPI.js';

export default api => {
    if (api.temEsc) {
        mapEntries({
            temesc: 'body',
            x30: '#btn-temesc'
        }, ([classe, el]) => addClass(el, [classe]));
    }

    temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
        api.temEsc = toggle(`#${target.id}`, 'x30');

        setAPI(api);
    });
};