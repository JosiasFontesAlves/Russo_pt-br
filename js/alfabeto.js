import { criarLista, kreatto, texto } from "./lib7.js";

export default () => {
    kreatto({ main: [{ div: { id: "alfabeto" } }] });
    texto({ ttl: 'Alfabeto russo' });

    let alfabeto = [
        ['Аа Бб Вв Гг Дд Ее Ёë Жж Зз Ии Йй Кк'],
        ['Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх'],
        ['Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя']
    ];

    criarLista(['alfabeto', [...alfabeto], { h1: { class: "alf" } }]);
}