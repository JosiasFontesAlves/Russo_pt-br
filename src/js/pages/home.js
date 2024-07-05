import { render } from '../lib7.js';
import Search from '../components/SearchBox/SearchBox.js';
import Container from '../components/Container.js';

export default render({
    div: {
        className: 'grid',
        id: 'home'
    }
}, [Search, Container]);