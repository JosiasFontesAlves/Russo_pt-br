import { criarLista, kreatto, texto } from "./lib7.js";
import { dicionário } from "./dicionário.js";

export default () => {
    location.hash = '#semana';

    texto({ id: 'ttl', texto: 'Dias da semana' });

    kreatto({ main: [{ div: { id: 'semana', class: 'fix w100' } }] });

    ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'].forEach((dia, i) => {
        criarLista(['semana', [`${dia} - ${dicionário[dia[0].toUpperCase()][dia]}`], { p: { id: `dia_${i}`, class: 'diaSem' } }]);
    });
}