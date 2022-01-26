import { render } from '../lib7.js';
import Drop from './Drop.js';
import { btn_menu, header, ttl } from '../template.js';

const BtnMenu = render(btn_menu);

export default render(header, [
    BtnMenu, Drop, render(ttl, 'Dicionário de russo')
]);