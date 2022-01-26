import { render } from "../lib7.js";
import Container from "../components/Container.js";
import SearchBox from '../components/SearchBox.js';

export default render({
    section: {
        id: 'home'
    }
}, [SearchBox, Container]);