import Pergunta from "../components/Pergunta.js";
import Search from "../components/SearchBox.js";
import { render } from "../lib7.js";

export default render({
    section: {
        id: 'home'
    }
}, [Pergunta, Search]);