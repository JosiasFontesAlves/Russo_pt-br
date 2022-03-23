import { render } from '../lib7.js';

const Barr = Array.from({ length: 5 }, () => render({ div: { class: 'barr bs_neon3' } }));

export default render({
    section: {
        class: 'fix flex',
        id: 'container-barr'
    }
}, Barr);