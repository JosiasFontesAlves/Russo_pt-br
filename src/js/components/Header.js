import { Burger, render, Title } from '../lib7.js';
import Drop from './Drop.js';

export default render({
    header: {
        className: 'blur2 bs_neon3 center fix flex w100'
    }
}, [
    Burger({ className: 'fix', id: 'burger' }), Drop,
    Title(1, 'Dicionário de russo', { id: 'ttl' })
]);