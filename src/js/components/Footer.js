import { render, Span } from '../lib7.js';

export default render({
    footer: {
        className: 'fix w100'
    }
}, Span(`Matsa © ${new Date().getFullYear()}`, { id: 'copyright' }));