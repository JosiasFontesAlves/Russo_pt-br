import { grid, kreatto, searchBox, templatr } from "../lib7.js";
import game from "./game.js";

templatr(
    { header: { class: 'fix flex center w100' } },
    { div: { id: 'root' } }
);

kreatto(
    { header: [{ section: { id: 'barr-pontos', class: 'fix flex center' } }] },
    {
        '#root': [{ p: { id: 'pergunta' } }]
    }
);

grid('pontos', 5, 'ponto_', 'barr-pontos', 'p');

searchBox(
    '#root',
    {
        input: { id: 'txt' },
        button: { id: 'ok', innerText: '=>' }
    }
);

game();