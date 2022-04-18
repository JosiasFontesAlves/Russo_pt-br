import { Burger, render, Title } from '../lib7.js';
import { header } from '../template.js';
import Drop from './Drop.js';

export default render(header, [
    Burger({ class: 'fix', id: 'burger' }), Drop,
    Title('Dicionário de russo', { id: 'ttl' })
]);