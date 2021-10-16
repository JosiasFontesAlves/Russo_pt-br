import { criarTabela, kreatto, texto } from "../lib7.js";

export default () => {
    const declinação = [
        {
            caso: 'nominativo',
            masculino: 'consoante -- й/ь ый/ой -- ий',
            neutro: 'о -- е -- ое -- ее',
            feminino: 'а -- я -- ая -- яя',
            plural: 'и -- ы -- а -- я'
        },
        {
            caso: 'genitivo',
            masculino: 'а -- я -- ого -- его',
            neutro: 'у -- ю -- ому -- ему',
            feminino: 'а -- я -- ая -- яя',
            plural: 'ов -- ев -- cons -- ей'
        },
        {
            caso: 'dativo',
            masculino: 'cons + у -- ю -- ому -- ему',
            neutro: 'у -- ю -- ому -- ему',
            feminino: 'e -- e -- ой -- ей',
            plural: 'и -- ы -- e'
        },
        {
            caso: 'acusativo',
            masculino: 'consoante -- й/ь -- ый/ой -- ий',
            neutro: 'о -- е -- ое -- ее',
            feminino: 'у -- ю -- ую -- юю',
            plural: 'и -- ы -- а -- я'
        },
        {
            caso: 'instrumental',
            masculino: 'ом -- ем -- ием',
            neutro: 'ом -- ем -- ем -- ием',
            feminino: 'ой -- ей -- ией',
            plural: 'ами -- ями -- иями'
        },
        {
            caso: 'preposicional',
            masculino: 'е -- ии',
            neutro: 'e',
            feminino: 'e -- ии',
            plural: 'ах -- ях -- иях'
        }
    ];

    texto({ ttl: 'Tabela de declinação' });

    kreatto({ main: [{ div: { id: "tab" } }] });

    criarTabela('#tab', declinação);
}