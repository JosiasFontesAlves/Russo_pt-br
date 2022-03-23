import { addClass, consumirAPI, getEntries, getRandomItem, getValues, httpPost, mapEntries, selek, selekFn, seleKlass, temEsc, Tempus, toggle } from './lib7.js';
import russo_ptbr from './dicionário.js';
import Pergunta from './components/Pergunta.js';
import resultado from './resultado.js';

export default () => consumirAPI('api.json', api => {
    let ctrl = 0, pt, ru;
    const setAPI = () => httpPost('/api', api);
    const respostas = [], Barr = seleKlass('barr');
    const search = getValues(russo_ptbr).flatMap(trads => getEntries(trads));

    const init = () => {
        [pt, ru] = getRandomItem(search);

        Pergunta(ru);
    }

    const setTema = () => {
        if (api.temEsc) mapEntries({
            temesc: 'body',
            x30: '#btn-temesc'
        }, ([classe, el]) => addClass(el, [classe]));

        temEsc('btn-temesc', ['body'], 'temesc', ({ target }) => {
            api.temEsc = toggle(`#${target.id}`, 'x30');

            setAPI();
        });
    }

    const setResultado = () => {
        const data = new Date();
        const cal = `${data.getDate()} ${Tempus.getCal.mês[data.getMonth()]} ${data.getFullYear()}`;
        
        api.respostas[`${cal} - ${Tempus.getRlg().join(':')}`] = respostas;

        resultado(respostas);

        setAPI();
    }

    init();

    setTema();

    selekFn('#btn-search', 'click', () => {
        const resposta = selek('#txt-search');
        const str = resposta.value.replace(resposta.value[0], resposta.value[0].toUpperCase());

        if (resposta.value !== '') {
            respostas.push({
                Português: pt, Russo: ru,
                Resposta: resposta.value
            });

            Barr[ctrl++].style.background = (str === pt) ? 'green' : 'red';

            resposta.value = '';

            ctrl < 5 ? init() : setResultado();
        }
    });


});