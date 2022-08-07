import { render } from '../lib7.js';

export default render({
    section: {
        className: 'fix flex',
        id: 'container-barr'
    }
}, Array.from({ length: 5 }, () =>
    render({
        div: {
            className: 'barr bs_neon3'
        }
    })
));