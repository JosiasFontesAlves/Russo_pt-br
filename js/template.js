import { addClass, criarLista, grid, kreatto, sElem, templatr, texto } from "./lib7.js";

templatr('header', { section: { id: 'container' } }, 'footer');

grid('blocos', 5, 'bl_');

kreatto(
    { header: 'h1 id="title"' },
    { '#bl_0': [{ input: { id: 'txt', type: 'text' } }, { input: { id: 'ok', type: 'button', value: '=>' } }] },
    { '#bl_2': [{ h3: { id: 'meses' } }, { section: { id: 'lista_meses' } }] },
    { '#bl_3': [{ h3: { id: 'diaSem' } }, { section: { id: 'lista_diaSem' } }] },
    { footer: 'p id="copyright"' }
);

['header', 'footer'].forEach(el => addClass({ elems: [sElem(el)], classe: 'fix w100' }));

const calendário = {
    meses: {
        janeiro: 'январь', fevereiro: 'февраль', março: 'март', abril: 'апрель', maio: 'май', junho: 'июнь',
        julho: 'июль', agosto: 'август', setembro: 'сентябрь', outubro: 'октябрь', novembro: 'ноябрь', dezembro: 'декабрь'
    },
    diaSem: {
        domingo: 'воскресенье', 'segunda-feira': 'понедельник', 'terça-feira': 'вторник',
        'quarta-feira': 'среда', 'quinta-feira': 'четверг', 'sexta-feira': 'пятница', sábado: 'суббота'
    }
};

function inject([obj, local]) {
    [...arguments].forEach(e => {
        for (let m in e[0]) criarLista([e[1], [`${m} - ${e[0][m]}`], 'p']);
    });
}

inject([calendário.meses, 'lista_meses'], [calendário.diaSem, 'lista_diaSem']);

texto(
    { id: 'title', texto: 'Dicionário de russo' }, { id: 'meses', texto: 'Meses' },
    { id: 'diaSem', texto: 'Dias da semana' }, { id: 'copyright', texto: 'Matsa &copy; 2021' }
);