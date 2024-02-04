import { render } from '../lib7.js';
import Trad from '../components/Trad.js';
import russo from '../russo.js';

export default render({
    section: {
        id: 'meses'
    }
}, [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
].map(mes =>
    Trad(mes, russo[mes[0]][mes], ['meses_ano', 'subl_nardo', 'w35'])
));