import { Card, render, SearchBox } from "../lib7.js";

export default Card({ div: { id: 'root' } }, [
    render({ p: { id: 'pergunta' } }),
    SearchBox(
        {
            id: 'txt',
            class: 'neon',
            placeholder: 'Digite a resposta'
        },
        {
            id: 'btn-res',
            class: 'fix neon'
        }
    )
]);