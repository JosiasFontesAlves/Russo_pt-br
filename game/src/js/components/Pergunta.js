import { render, Span } from '../lib7.js';

export default render({
    p: {
        class: 'padd15',
        id: 'pergunta'
    }
}, [
    Span('Qual é o significado de '),
    render({ b: { id: 'resposta' } }),
    Span(' Em russo?')
]);