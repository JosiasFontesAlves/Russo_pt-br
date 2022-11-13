import { replacer, selek, selekFn, toggle } from './lib7.js';
import Res from './components/Res.js';

export default () => {
    const [txt, search] = selek('#txt-search', '#container-search');

    const fn = {
        'btn-temesc': () => toggle({ body: 'temesc', '#btn-temesc-child': 'x30' }),
        burger: () => toggle({ '#drop': 'drop_hidden' }),
        res: () => selek('#res').remove(),
        search: () => {
            let str = txt.value.trim();

            if (!str) return;

            str = replacer(str, str[0], str[0].toUpperCase());

            if (search.children.length > 1) fn.res();

            search.appendChild(Res(str));

            txt.value = '';
        }
    };

    selekFn('body', 'click', ev => {
        if (ev.target.localName === 'button') fn[ev.composedPath()[1].id]();
    });
}