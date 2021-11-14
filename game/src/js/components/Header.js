import { Card, Container, render } from "../lib7.js";

export default Card({ header: { class: 'center fix flex w100' } }, [
    render({ h1: { id: 'ttl' } }, 'Matsa'),
    Container(
        {
            section: {
                id: 'container-blocos',
                class: 'flex fix'
            }
        },
        {
            div: {
                class: 'blocos'
            }
        }, 
        'blc_', 5
    )
]);