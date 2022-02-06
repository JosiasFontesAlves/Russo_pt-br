import { insertChilds, mapEntries, render, selek, selekFn } from "./lib7.js";
import dicionário from "./dicionário.js";
import { close } from "./template.js";

export default () => {
    const [txt, res] = selek('txt', 'res'), search = {};

    Object.values(dicionário).forEach(trads => mapEntries(trads, ([pt, ru]) => search[pt] = ru));

    const fn = {
        ok: () => {
            res.innerHTML = '';

            if (txt.value !== '') {
                const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                res.hidden = false;

                insertChilds('#res', [
                    `${txt.value} - ${search[str] ?? 'Ainda não temos essa palavra no dicionário'}`,
                    render(close, 'X')
                ]);
            }

            txt.value = '';
        },
        close: () => res.hidden = true
    };

    selekFn('search', 'click', ({ target: { localName, id } }) => {
        if (localName === 'button') fn[id]();
    });
}