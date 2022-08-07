import { render, SearchBox, Span } from '../lib7.js';

export default render({
    div: {
        id: 'home'
    }
}, [
    render({
        p: {
            className: 'padd15',
            id: 'pergunta'
        }
    }, [
        Span('Qual é o significado de '),
        render({ b: { id: 'resposta' } }),
        Span(' Em russo?')
    ]),
    SearchBox({
        className: 'brd_nardo padd5 w70',
        id: 'txt-search',
        placeholder: 'Digite a resposta'
    }, {
        className: 'brd_nardo br15 btn_search fn',
        id: 'btn-search', textContent: '=>'
    })
]);