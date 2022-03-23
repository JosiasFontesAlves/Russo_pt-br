import { render } from '../lib7.js';
import Copyright  from './Copyright.js';
import Temesc  from './Temesc.js';

export default render({
    footer: {
        class: 'fix grid w100'
    }
}, [Temesc, Copyright]);