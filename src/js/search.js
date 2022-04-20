import { getEntries, getValues, replacer, selek, selekFn } from "./lib7.js";
import russo from "./russo.js";

export default () => {
    const [txt, res] = selek(['#txt-search', '#res']);

    const search = getValues(russo)
        .flatMap(trads => getEntries(trads))
        .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

    selekFn('#search', 'click', ({ target }) => {
        const fn = {
            'btn-search': () => {
                if (txt.value !== '') {
                    const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                    res.hidden = false;

                    replacer({
                        '#pesquisa': `${txt.value} - ${search[str] ?? 'Ainda não temos essa palavra no dicionário'}`
                    });
                }

                txt.value = '';
            }, 'btn-res': () => res.hidden = true
        };

        if (target.localName === 'button') fn[target.id]();
    });                 
}