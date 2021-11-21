import { render } from "../lib7.js";
import setMain from "../setMain.js";
import ttl from "../ttl.js";

export default () => {
    ttl('Alfabeto russo');

    const alfabeto = [
        ['Аа Бб Вв Гг Дд Ее Ёë Жж Зз Ии Йй Кк'],
        ['Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх'],
        ['Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя']
    ].map(letra => render({ h1: { class: "alf" } }, ...letra));

   setMain({ div: { id: "alfabeto" } }, alfabeto);
}