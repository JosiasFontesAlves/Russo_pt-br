import { getEntries, getValues, replacer, selek, selekFn, SPA, toggle } from './lib7.js';
import russo from './russo.js';
import routes from './routes.js';
import lista_drop from './lista_drop.js';

export default () => {
    location.hash = '#home';

    const getTrad = getValues(russo)
        .flatMap(trads => getEntries(trads))
        .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

    selekFn('body', 'click', ev => {
        const fn = {
            'btn-temesc': () => toggle({ body: 'temesc', [`#${ev.target.id}`]: 'x30' }),
            burger: () => toggle({ '#drop': 'drop_hidden' }),
            res: () => res.hidden = true,
            search: () => {
                const [txt, res] = selek('#txt-search', '#res');

                if (txt.value.trim()) {
                    const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                    res.hidden = false;

                    replacer({
                        '#pesquisa': `${txt.value} - ${getTrad[str] ?? 'Ainda não temos essa palavra no dicionário'}`
                    });

                    txt.value = '';
                }
            }
        };

        if (ev.target.localName === 'button') fn[ev.composedPath()[1].id]();
    });

    SPA(routes, '#root', hash => {
        lista_drop['#home'] = 'Dicionário de russo';

        replacer({ '#ttl': lista_drop[hash] });
    });
}