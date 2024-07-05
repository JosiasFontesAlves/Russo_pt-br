import { capitalizeStr, selek } from '../../lib7.js';
import Res from './Res.js';

export default () => {
    const [txt, search] = selek('#txt-search', '#container-search');

    let str = txt.value.trim();

    if (!str) return;

    str = capitalizeStr(str);

    if (search.children.length > 1) selek('#res').remove();

    search.appendChild(Res(str));

    txt.value = '';
};
