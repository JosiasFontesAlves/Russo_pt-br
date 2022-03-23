import { Tempus } from './lib7.js';
import resultado from './resultado.js';
import setAPI from './setAPI.js';

export default (api, respostas) => {
    const data = new Date();
    const cal = `${data.getDate()} ${Tempus.getCal.mês[data.getMonth()]} ${data.getFullYear()}`;

    api.respostas[`${cal} - ${Tempus.getRlg().join(':')}`] = respostas;

    resultado(respostas);

    setAPI(api);
};