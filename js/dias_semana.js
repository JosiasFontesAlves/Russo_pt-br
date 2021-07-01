import { addId, criarLista, kreatto, replacer, texto } from "./lib7.js";
import { dicionário } from "./dicionário.js";

export default () => {
    location.hash = '#semana';

    const dia = [
        'domingo - {{dom}}', 'segunda-feira - {{seg}}', 'terça-feira - {{ter}}',
        'quarta-feira - {{qua}}', 'quinta-feira - {{qui}}', 'sexta-feira - {{sex}}', 'sábado - {{sáb}}'
    ];

    kreatto({ main: [{ h2: { id: 'dias' } }, { div: { id: 'semana', class: 'fix w100' } }] });

    texto({ id: 'dias', texto: 'Dias da semana' });

    criarLista(['semana', dia, 'p class="diaSem"']);

    addId(['diaSem', 'dia_']);

    const { D, Q, S, T } = dicionário;

    replacer(
        { '#dia_0': { 'dom': D[dia[0].substring(0, 7)] } },
        { '#dia_1': { 'seg': S[dia[1].substring(0, 13)] } },
        { '#dia_2': { 'ter': T[dia[2].substring(0, 11)] } },
        { '#dia_3': { 'qua': Q[dia[3].substring(0, 12)] } },
        { '#dia_4': { 'qui': Q[dia[4].substring(0, 13)] } },
        { '#dia_5': { 'sex': S[dia[5].substring(0, 11)] } },
        { '#dia_6': { 'sáb': S[dia[6].substring(0, 6)] } }
    );
}