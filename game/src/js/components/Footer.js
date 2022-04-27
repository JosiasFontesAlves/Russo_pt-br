import { render, Span } from '../lib7.js';
import Temesc from './Temesc.js';

export default render({
    footer: {
        class: 'fix grid w100'
    }
}, [Temesc, Span('Matsa © 2022', { id: 'copyright' })]);