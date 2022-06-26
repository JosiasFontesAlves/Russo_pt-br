import { render, Tabela } from '../lib7.js';

export default render({
    section: {
        id: 'pronomes'
    }
}, [
    render(...[
        {
            h2: {
                id: 'title-tab-pronomes'
            }
        },
        'Declinação dos pronomes pessoais'
    ]),
    Tabela('tab-pronomes', [
        {
            Pronome: 'Eu', Nominativo: 'Я', Genitivo: 'Меня',
            Dativo: 'Мне', Acusativo: 'Меня',
            Instrumental: 'мной', Preposicional: '(oбо) мне'
        },
        {
            Pronome: 'Tu', Nominativo: 'Ты', Genitivo: 'Тебя',
            Dativo: 'Тебе', Acusativo: 'Тебя',
            Instrumental: 'тобой', Preposicional: '(o) тебе'
        },
        {
            Pronome: 'Nós', Nominativo: 'Мы', Genitivo: 'Нас',
            Dativo: 'Нам', Acusativo: 'Вас',
            Instrumental: 'нами', Preposicional: '(o) нас'
        },
        {
            Pronome: 'Nós', Nominativo: 'Мы', Genitivo: 'Нас',
            Dativo: 'Нам', Acusativo: 'Вас',
            Instrumental: 'нами', Preposicional: '(o) нас'
        },
        {
            Pronome: 'Vós', Nominativo: 'Вы', Genitivo: 'Вас',
            Dativo: 'Вам', Acusativo: 'Их',
            Instrumental: 'вами', Preposicional: '(o) вас'
        },
        {
            Pronome: 'Eles / Elas', Nominativo: 'Они',
            Genitivo: 'Их', Dativo: 'Им', Acusativo: 'Их',
            Instrumental: 'ими', Preposicional: '(o) них',
        }
    ])
]);