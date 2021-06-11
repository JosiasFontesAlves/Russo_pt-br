import { dicionário } from './dicionário.js';
import { kreatto, selek, selekFn, templatr, texto } from './lib7.js';

templatr({ main: { class: 'fix' } });

kreatto({
    main: [{ input: { type: 'text', id: 'txt' } }, { button: { id: 'ok' } }, { p: { id: 'res' } }]
});

selekFn('ok', 'click', () => {
    const txt = selek('txt');
    texto({ id: 'res', texto: dicionário[txt.value[0].toUpperCase()][txt.value] ?? 'Ainda não temos essa palavra no dicionário' });
});