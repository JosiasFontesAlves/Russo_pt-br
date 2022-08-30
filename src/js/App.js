import { selek, selekFn, toggle } from './lib7.js';
import Res from './components/Res.js';

export default () => {
    const [txt, search] = selek('#txt-search', '#container-search');

    const fn = {
        'btn-temesc': () => toggle({ body: 'temesc', '#btn-temesc-child': 'x30' }),
        burger: () => toggle({ '#drop': 'drop_hidden' }),
        res: () => search.removeChild(selek('#res')),
        search: () => {
            if (!txt.value.trim()) return;
            
            const str = txt.value.trim().replace(txt.value.trim()[0], txt.value.trim()[0].toUpperCase());

            if (search.children.length > 1) fn.res();

            search.appendChild(Res(str));

            txt.value = '';
        }
    };

    location.hash = '#home';

    selekFn('body', 'click', ev => {
        if (ev.target.localName === 'button') fn[ev.composedPath()[1].id]();
    });
}