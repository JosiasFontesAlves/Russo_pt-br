import { LinkBar, render } from '../lib7.js';

export default render({
    aside: {
        class: 'blur3 bs_neon3 fix grid h100'
    }
}, [
    LinkBar({
        '#home': 'Início',
        '#resultados': 'Resultados anteriores'
    }, { class: 'grid ' }, { class: 'padd10' })
]);