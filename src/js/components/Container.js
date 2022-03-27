import { mapEntries, render } from "../lib7.js";
import russo from "../russo.js";
import { blocos, container, trad } from "../template.js";

const childs = mapEntries(russo, ([letra, palavras]) => {
    const trads = mapEntries(palavras, ([pt, ru]) => {
        ru = ru.replace(ru[0], ru[0].toUpperCase());
        return render(trad, `${pt} - ${ru}`)
    });

    return render(blocos, [render('h2', letra), ...trads]);
});

export default render(container, childs);