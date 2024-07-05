import { render, SearchBox } from '../../lib7.js';
import propsSearch from './propsSearch.js';

export default render({
    section: {
        className: 'fix w100',
        id: 'container-search'
    }
}, SearchBox(...propsSearch));