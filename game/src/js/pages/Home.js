import Search from "../components/SearchBox.js";
import { render } from "../lib7.js";

export default render({
    section: {
        id: 'home'
    }
}, [render({ p: { class: 'padd10', id: 'pergunta' } }), Search]);