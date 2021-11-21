import { render } from "../lib7.js";
import dicionário from "../dicionário.js";
import ttl from "../ttl.js";
import setMain from "../setMain.js";

export default () => {
    ttl('Dias da semana');

    const diaSem = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ].map((dia, i) => render(
        { p: { id: `dia_${i}`, class: 'diaSem' } },
        `${dia} - ${dicionário[dia[0].toUpperCase()][dia]}`
    ));

    setMain({ div: { id: 'semana', class: 'fix w100' } }, diaSem);
}