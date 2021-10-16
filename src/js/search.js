import { insertChilds, render, selek, selekFn } from "./lib7.js";
import dicionário from "./dicionário.js";

export default () => {
    const search = () => {
        const res = selek('res'),
            setHidden = () => res.hidden = true;

        Object.entries({
            hidden: !setHidden(),
            innerHTML: ''
        }).forEach(([prop, val]) => res[prop] = val);

        insertChilds('#res', [
            `${txt.value} - ${dicionário[txt.value[0].toUpperCase()][txt.value] ?? 'Ainda não temos essa palavra no dicionário'}`,
            render({ button: { id: 'close', class: 'br_20' } }, 'X')
        ]);

        selekFn('close', 'click', () => setHidden());

        txt.value = '';
    }

    selekFn('ok', 'click', () => (res.hidden === true && txt.value != '') ? search() : setHidden());
}