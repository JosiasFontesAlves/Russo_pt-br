import { render, SearchBox, Span } from '../lib7.js';
import { btn_close, props_searchBox, res, search } from '../template.js';

export default render(search, [
    SearchBox(...props_searchBox),
    render(res, [
        Span('', { id: 'pesquisa' }),
        render(btn_close, 'X')
    ])
]);
