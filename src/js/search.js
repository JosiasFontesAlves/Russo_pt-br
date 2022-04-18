import { getEntries, getValues, insertChilds, render, selek, selekFn, Span } from "./lib7.js";
import russo from "./russo.js";
import { btn_close } from "./template.js";

export default () => {
    const [txt, res] = selek(['#txt-search', '#res']);

    const search = getValues(russo)
        .flatMap(trads => getEntries(trads))
        .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

    selekFn('#search', 'click', ({ target }) => {
        const fn = {
            'btn-search': () => {
                res.innerHTML = '';

                if (txt.value !== '') {
                    const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                    res.hidden = false;

                    insertChilds('#res', [
                        Span(`${txt.value} - ${search[str] ?? 'Ainda não temos essa palavra no dicionário'}`),
                        render(btn_close, 'X')
                    ]);
                }

                txt.value = '';
            }, 'btn-res': () => res.hidden = true
        };

        if (target.localName === 'button') fn[target.id]();
    });
}