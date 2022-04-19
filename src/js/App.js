import { AJAX, httpPost, replacer, selek, selekFn, SPA, temEsc, toggle } from './lib7.js';
import routes from './routes.js';
import search from './search.js';
import { lista_drop } from './template.js';

location.hash = '#home';

export default () => {
    const dropHidden = () => toggle({ '#drop': 'drop_hidden' });

    SPA(routes, '#root', hash => {
        lista_drop['#home'] = 'Dicionário de russo';
        
        replacer({
            '#ttl': {
                [selek('#ttl').textContent]: lista_drop[hash]
            }
        });

        dropHidden();
    });

    selekFn('#burger', 'click', dropHidden);

    AJAX('temesc.json', ({ temesc }) => {
        if (temesc) toggle({
            body: 'temesc',
            '#btn-temesc': 'x30'
        });

        temEsc('btn-temesc', ['body'], 'temesc', () =>
            httpPost('temesc', {
                temesc: toggle({ '#btn-temesc': 'x30' })
            })
        );
    });

    search();
}