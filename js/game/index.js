import { grid, kreatto, templatr, texto } from "../lib7.js";
import game from "./game.js";

templatr(
    { header: { class: 'fix flex center w100' } },
    { div: { id: 'root' } }
);

kreatto(
    { header: [{ section: { id: 'barr-pontos', class: 'fix flex center' } }] },
    {
        '#root': [
            { p: { id: 'pergunta' } },
            { input: { type: 'text', id: 'txt' } },
            { button: { id: 'ok' } },
        ]
    }
);

grid('pontos', 5, 'ponto_', 'barr-pontos', 'p');

texto({ id: 'ok', texto: '=>' });

game();