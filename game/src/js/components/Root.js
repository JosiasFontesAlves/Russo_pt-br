import { render, SearchBox } from "../lib7.js";

export default render({ div: { id: 'root' } }, [
    render({ p: { id: 'pergunta' } }),
    SearchBox({
        class: 'padd5', id: 'txt',
        placeholder: 'Digite a resposta'
    }, { id: 'btn-ok' })
]);