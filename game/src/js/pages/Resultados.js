import { consumirAPI, mapEntries, render, Tabela } from "../lib7.js";

export default await consumirAPI('api.json', ({ respostas }) => {
    const TabResultados = mapEntries(respostas, ([data, tab], i) => render({
        div: {
            class: 'container-tabs res'
        }
    }, [render({ h3: { class: 'ttl_res padd10' } }, data), Tabela(`tab-res-${i}`, tab)]));

    return render({
        section: {
            id: 'resultados'
        }
    }, [render('h2', 'Resultados anteriores:'), ...TabResultados]);
});