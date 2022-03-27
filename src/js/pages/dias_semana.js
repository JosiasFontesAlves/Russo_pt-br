import dicionário from "../dicionário.js";
import { render } from "../lib7.js";

export default render({ section: { id: 'semana' } }, [
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
].map((dia, i) => render(
    { p: { id: `dia_${i}`, class: 'diaSem' } },
    `${dia} - ${dicionário[dia[0].toUpperCase()][dia]}`
)));