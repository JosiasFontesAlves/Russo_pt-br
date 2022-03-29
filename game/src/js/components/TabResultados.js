import { mapEntries, render, Tabela } from "../lib7.js";
import H3 from "./H3.js";

export default respostas => mapEntries(respostas, ([data, tab], i) => {
    return render({
        div: {
            class: 'container-tabs res'
        }
    }, [H3(data), Tabela(`tab-res-${i}`, tab)])
});