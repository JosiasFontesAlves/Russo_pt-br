import { insertChilds, render, selek, selekFn } from "./lib7.js";
import dicionário from "./dicionário.js";

export default () => {
    const setHidden = () => res.hidden = true,
        search = () => {
            const res = selek('res'),
                str = txt.value.replace(txt.value[0], txt.value[0].toUpperCase());

            Object.entries({
                hidden: !setHidden(),
                innerHTML: ''
            }).forEach(([prop, val]) => res[prop] = val);

            insertChilds('#res', [
                `${txt.value} - ${dicionário[str[0]][str] ?? 'Ainda não temos essa palavra no dicionário'}`,
                render({ button: { id: 'close', class: 'br_20' } }, 'X')
            ]);

            selekFn('close', 'click', () => setHidden());

            txt.value = '';
        }

    selekFn('ok', 'click', () => (res.hidden === true && txt.value != '') ? search() : setHidden());
}