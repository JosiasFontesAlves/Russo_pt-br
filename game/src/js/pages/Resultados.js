import { consumirAPI, render } from "../lib7.js";
import Erros from "../components/Erros.js";
import TabResultados from "../components/TabResultados.js";

export default await consumirAPI('api.json', ({ respostas }) => {
    return render({
        section: {
            id: 'resultados'
        }
    }, [
        render('h2', 'Resultados anteriores:'), 
        Erros(respostas), ...TabResultados(respostas)
    ]);
});