import { mapEntries, render } from '../lib7.js';
import Trad from './Trad.js';

export default trads =>
    render({
        section: {
            className: 'container_trads'
        }
    }, mapEntries(trads, ([pt, ru]) => Trad(pt, ru)));