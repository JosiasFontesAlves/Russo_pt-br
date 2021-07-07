import { templatr } from "../lib7.js";

templatr(
    { header: { class: 'fix w100' } },
    { div: { id: 'root' } }
);


function render(elem) {
    for (let tag in elem) {
        let atr = [];

        for (let key in elem[tag])
            atr.push(`${a}="${elem[tag][key]}"`);

        return (typeof elem == 'object') ? `<${tag} ${atr.join(' ')}></${tag}>` : `<${elem}></${elem}>`;
    }
}

console.log(
    render({ div: { id: 'root', class: 'mts' } }),
    render('main')
);