import { getValues, render, Tabela } from '../lib7.js';
import H3 from './H3.js';

export default (/** @type {{}} */ respostas) => {
    const erros = getValues(respostas)
        .flatMap(arr => arr)
        .filter(({ Português, Resposta }) => Português.toLowerCase() !== Resposta.toLowerCase());

    return render({
        div: {
            id: 'erros'
        }
    }, [H3(`Você errou ${erros.length} palavras:`), Tabela('tab-erros', erros)]);
}