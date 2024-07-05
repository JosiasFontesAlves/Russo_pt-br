import { Burger, render, Router, Title, toggle } from '../lib7.js';
import lista_drop from '../lista_drop.js';
import Drop from './Drop/Drop.js';

['/', '/home'].forEach(route => lista_drop[route] = 'Dicionário de russo');

for (const hash in lista_drop)
    lista_drop[hash] = Title(1, lista_drop[hash], { id: 'ttl' });

const setDrop = () => toggle({ '#drop': 'drop_hidden' });

export default render({
    header: {
        className: 'blur2 bs_neon3 center fix flex w100'
    }
}, [
    Burger({ className: 'fix', id: 'burger', onclick: setDrop }),
    Drop, Router(lista_drop)
]);