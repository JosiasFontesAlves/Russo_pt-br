import { render } from "../lib7.js";
import { alf, alfabeto } from "../template.js";

export default render(alfabeto, [
    'Аа Бб Вв Гг Дд Ее Ёë Жж Зз Ии Йй Кк',
    'Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх',
    'Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя'
].map(letra => render(alf, letra)));