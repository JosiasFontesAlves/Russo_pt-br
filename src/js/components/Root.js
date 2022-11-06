import { Router, selek } from '../lib7.js';
import lista_drop from '../lista_drop.js';
import routes from '../routes.js';

export default Router(routes, { id: 'root' }, hash => {
    lista_drop['#home'] = 'Dicionário de russo';

    selek('#ttl').textContent = lista_drop[hash];
});