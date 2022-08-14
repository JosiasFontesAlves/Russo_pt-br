import { replacer, Router } from '../lib7.js';
import lista_drop from '../lista_drop.js';
import routes from '../routes.js';

export default Router(routes, { id: 'root' }, hash => {
    lista_drop['#home'] = 'Dicionário de russo';

    replacer({ '#ttl': lista_drop[hash] });
});