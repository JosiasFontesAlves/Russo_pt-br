import { render } from '../lib7.js';
import Search from './SearchBox.js';

export default render({
    div: {
        id: 'root'
    }
}, [render({ p: { class: 'padd10', id: 'pergunta' } }), Search]);