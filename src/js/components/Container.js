import { render } from "../lib7.js";
import dicionário from "../dicionário.js";
import { blocos, container } from "../template.js";

const childs = Object.entries(dicionário).map(([letra, palavras]) => {
    const trads = Object.entries(palavras).map(([pt, ru]) => render({
        p: {
            class: 'trad'
        }
    }, `${pt} - ${ru}`));

    return render(blocos, [render('h2', letra), ...trads]);
});

export default render(container, childs);