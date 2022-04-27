import { render } from '../lib7.js';

export default render({
    section: {
        class: 'fix flex',
        id: 'container-barr'
    }
}, Array.from({ length: 5 }, () => render({
    div: {
        class: 'barr bs_neon3'
    }
})));