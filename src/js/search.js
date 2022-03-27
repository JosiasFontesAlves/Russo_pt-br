import { getEntries, getValues, insertChilds, render, selek, selekFn, Span } from "./lib7.js";
import dicionário from "./dicionário.js";
import { close } from "./template.js";

export default () => {
    const [txt, res] = selek(['#txt', '#res']);

    const search = getValues(dicionário)
        .flatMap(trads => getEntries(trads))
        .reduce((acc, [pt, ru]) => ({ ...acc, [pt]: ru }), {});

    selekFn('#search', 'click', ({ target }) => {
        const fn = {
            ok: () => {
                res.innerHTML = '';

                if (txt.value !== '') {
                    const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                    res.hidden = false;

                    insertChilds('#res', [
                        Span(`${txt.value} - ${search[str] ?? 'Ainda não temos essa palavra no dicionário'}`),
                        render(close, 'X')
                    ]);
                }

                txt.value = '';
            }, close: () => res.hidden = true
        };

        if (target.localName === 'button') fn[target.id]();
    });
}