import { criarTabela, kreatto, texto } from "./lib7.js";

export default () => {
    const declinação = {
        caso: ['nominativo', 'genitivo', 'dativo', 'acusativo', 'instrumental', 'preposicional'],
        masculino: [
            'consoante <br> й/ь <br> ый/ой <br> ий', 'consoante - а <br> й/ь - я <br> ый/ой - ого <br> ий - его',
            'cons + у <br> й/ь - ю <br> ый/ой - ому <br> ий - ему', 'consoante <br> й/ь <br> ый/ой <br> ий',
            'ом <br> ем <br> ием', 'е <br> ии',
        ],
        neutro: [
            'о <br> е <br> ое <br> ее', 'о - а <br> е - я <br> ое - ого <br> ее - его',
            'о - у <br>  е - ю <br> ое - ому <br> ее - ему', 'о <br> е <br> ое <br> ее',
            'ом <br> ем <br> ем <br> ием', 'e',
        ],
        feminino: [
            'а <br> я <br> ая <br> яя', 'а - ы <br> я/ь - и <br> ая - ой <br> яя - ей',
            'а - e <br> я - e <br> ая - ой <br> яя - ей', 'а - у <br> я - ю <br> ая - ую <br> яя - юю',
            'ой <br> ей <br> ией', 'e <br> ии',
        ],
        plural: [
            'и <br> ы <br> а <br> я', 'cons - ов <br> й - ев <br> a - cons <br> ь - ей',
            'и <br> ы <br> e', 'и <br> ы <br> а <br> я',
            'ами <br> ями <br> иями', 'ах <br> ях <br> иях',
        ]
    }

    texto({ ttl: 'Tabela de declinação' });

    kreatto({ main: [{ div: { id: "tab" } }] });

    criarTabela('tab', 'col', 'fila', declinação);
}