import { addClass, AJAX, httpPost, selekFn, SPA, temEsc, toggle } from './lib7.js';
import routes from './routes.js';
import search from './search.js';

location.hash = '#home';

export default () => {
    const dropHidden = () => toggle({ '#drop': 'drop_hidden' });

    addClass({ '.btn_burger': ['fn'] })

    SPA(routes, '#root', dropHidden);

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