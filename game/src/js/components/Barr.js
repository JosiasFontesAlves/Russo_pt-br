import { render } from '../lib7.js';

let ctrl = 0, barr = [];

while (ctrl < 5) {
    barr.push(
        render({ div: { class: 'barr', id: `barr-${ctrl++}` } })
    );
}

export default render({
    section: {
        class: 'flex',
        id: 'container-barr'
    }
}, barr);