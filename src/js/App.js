import { getEntries, getValues, replacer, selek, selekFn, toggle } from './lib7.js';
import russo from './russo.js';

const getTrad = getValues(russo)
    .flatMap(trads => getEntries(trads))
    .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

const fn = {
    'btn-temesc': () => toggle({ body: 'temesc', '#btn-temesc-child': 'x30' }),
    burger: () => toggle({ '#drop': 'drop_hidden' }),
    res: () => res.hidden = true,
    search: () => {
        const [txt, res] = selek('#txt-search', '#res');

        if (!txt.value) return;

        const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

        res.hidden = false;

        replacer({
            '#pesquisa': `${txt.value} - ${getTrad[str] ?? 'Ainda não temos essa palavra no dicionário'}`
        });

        txt.value = '';
    }
};

export default () => {
    location.hash = '#home';

    selekFn('body', 'click', ev => {
        if (ev.target.localName === 'button') fn[ev.composedPath()[1].id]();
    });
}