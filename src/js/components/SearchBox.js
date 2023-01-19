import { render, replacer, SearchBox, selek } from '../lib7.js';
import Res from './Res.js';

const search = () => {
    const [txt, search] = selek('#txt-search', '#container-search');

    let str = txt.value.trim();

    if (!str) return;

    str = replacer(str, str[0], str[0].toUpperCase());

    if (search.children.length > 1) selek('#res').remove();

    search.appendChild(Res(str));

    txt.value = '';
}

export default render({
    section: {
        className: 'fix w100',
        id: 'container-search'
    }
}, SearchBox({
    className: 'blur2 brd_nardo br15 bs_neon2 padd5 w70',
    id: 'txt-search'
}, {
    className: 'br50 bs_neon3',
    id: 'btn-search',
    onclick: search,
    textContent: '=>'
}, {
    id: 'search'
}));