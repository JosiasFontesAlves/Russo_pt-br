import { render, replacer, Router } from '../lib7.js';
import lista_drop from '../lista_drop.js';
import routes from '../routes.js';

export default render({
    div: {
        id: 'root'
    }
}, Router(routes, {}, hash => {
    lista_drop['#home'] = 'Dicionário de russo';

    replacer({ '#ttl': lista_drop[hash] });
}));