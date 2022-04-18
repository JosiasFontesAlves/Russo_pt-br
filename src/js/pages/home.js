import { mapEntries, render, SearchBox, Span } from '../lib7.js';
import russo from '../russo.js';
import { blocos, container, h2_letra, props_searchBox, p_trads, res, search } from '../template.js';

const Search = render(search, [
    SearchBox(...props_searchBox),
    render(res)
]);

const Container = mapEntries(russo, ([letra, trads]) => {
    const $trads = mapEntries(trads, ([pt, ru]) =>
        render(
            p_trads, mapEntries({ pt, ru }, ([classe, txt]) =>
                Span(txt, { class: classe })
            )
        )
    );

    return render(blocos, [
        render(h2_letra, letra),
        ...$trads
    ]);
});

export default render(container, [Search, ...Container]);