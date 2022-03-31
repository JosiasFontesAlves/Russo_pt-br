import { mapEntries, render } from "../lib7.js";
import russo from "../russo.js";
import { blocos, container, trad } from "../template.js";

const childs = mapEntries(russo, ([letra, palavras]) => {
    const trads = mapEntries(palavras, ([pt, ru]) => render(trad, `${pt} - ${ru}`));

    return render(blocos, [render('h2', letra), ...trads]);
});

export default render(container, childs);