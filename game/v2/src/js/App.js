import { getEntries, getRandomItem, getValues, replacer } from './lib7.js';
import russo from './russo.js';

let ctrl = 0, pt, ru;

const init = () => {
    [pt, ru] = getRandomItem(getValues(russo).flatMap(trads => getEntries(trads)));

    replacer({ '#resposta': ru });
}

export default () => {
    init();
}