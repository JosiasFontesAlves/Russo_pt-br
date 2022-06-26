import { render, SearchBox, Span } from '../lib7.js';

export default render({
    section: {
        className: 'fix w100',
        id: 'container-search'
    }
}, [
    SearchBox({
        className: 'blur2 brd_nardo br15 bs_neon2 padd5 w70',
        id: 'txt-search'
    }, {
        className: 'br50 bs_neon3',
        id: 'btn-search'
    }, {
        id: 'search'
    }),
    render({
        p: {
            className: 'blur2 br7 brd_nardo padd7 w70',
            hidden: true, id: 'res'
        }
    }, [
        Span('', { id: 'pesquisa' }),
        render({
            button: {
                className: 'br7',
                id: 'btn-res'
            }
        }, 'X')
    ])
]);