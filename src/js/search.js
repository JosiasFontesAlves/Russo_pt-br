import { insertChilds, render, selek, selekFn } from "./lib7.js";
import dicionário from "./dicionário.js";
import { close } from "./template.js";

export default () => {
    const [txt, res] = selek('txt', 'res');

    const fn = {
        ok: () => {
            res.innerHTML = '';

            if (txt.value !== '') {
                const str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

                res.hidden = false;

                insertChilds('#res', [
                    `${txt.value} - ${dicionário[str[0]][str] ?? 'Ainda não temos essa palavra no dicionário'}`,
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