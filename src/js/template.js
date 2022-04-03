export const header = {
    header: {
        class: 'blur2 center flex fix w100'
    }
},
    drop = {
        div: {
            id: 'drop',
            class: 'bs_neon drop_hidden fix grid padd3 vidro_neon'
        }
    },
    temesc = {
        div: {
            id: 'temesc',
            class: 'center flex'
        }
    },
    lista_drop = {
        '#alfabeto': 'Alfabeto',
        '#decl': 'Declinação',
        '#home': 'Início',
        '#meses': 'Meses do ano',
        '#num': 'Números',
        '#semana': 'Dias da semana',
        '#pronomes': 'Pronomes pessoais'
    },
    props_linkBar = [{ class: 'grid' }, { class: 'padd5' }],
    lua = {
        img: {
            alt: 'lua', id: 'lua',
            src: './img/temesc.png'
        }
    },
    btn_drop = [
        'btn-temesc', 4, 'blue',
        { height: 20, width: 20 }
    ],
    root = {
        div: {
            id: 'root'
        }
    },
    home = {
        section: {
            id: 'home'
        }
    },
    search = {
        section: {
            id: 'search',
            class: 'fix w100'
        }
    },
    container = {
        div: {
            id: 'container',
            class: 'grid'
        }
    },
    trad = {
        p: {
            class: 'trad padd3'
        }
    },
    res = {
        p: {
            class: 'blur2 br15 padd5',
            hidden: true, id: 'res'
        }
    },
    searchBox = [
        {
            id: 'txt', type: 'text',
            class: 'blur2 br15 padd5 w70',
            placeholder: 'Pesquisar no dicionário'
        },
        {class: 'br50', id: 'ok' }
    ],
    close = {
        button: {
            id: 'close', class: 'br15'
        }
    },
    blocos = {
        div: {
            class: 'brd_nardo bs_neon3 blocos padd10'
        }
    },
    footer = {
        footer: {
            class: 'center flex fix w100'
        }
    },
    copyright = {
        span: {
            id: 'copyright'
        }
    },
    alfabeto = {
        section: {
            class: 'grid',
            id: 'alfabeto'
        }

    },
    alf = {
        h1: {
            class: 'alf padd7'
        }
    },
    tab_decl = [
        {
            caso: 'nominativo',
            masculino: 'consoante -- й/ь ый/ой -- ий',
            neutro: 'о -- е -- ое -- ее',
            feminino: 'а -- я -- ая -- яя',
            plural: 'и -- ы -- а -- я'
        },
        {
            caso: 'genitivo',
            masculino: 'а -- я -- ого -- его',
            neutro: 'у -- ю -- ому -- ему',
            feminino: 'а -- я -- ая -- яя',
            plural: 'ов -- ев -- cons -- ей'
        },
        {
            caso: 'dativo',
            masculino: 'cons + у -- ю -- ому -- ему',
            neutro: 'у -- ю -- ому -- ему',
            feminino: 'e -- e -- ой -- ей',
            plural: 'и -- ы -- e'
        },
        {
            caso: 'acusativo',
            masculino: 'consoante -- й/ь -- ый/ой -- ий',
            neutro: 'о -- е -- ое -- ее',
            feminino: 'у -- ю -- ую -- юю',
            plural: 'и -- ы -- а -- я'
        },
        {
            caso: 'instrumental',
            masculino: 'ом -- ем -- ием',
            neutro: 'ом -- ем -- ем -- ием',
            feminino: 'ой -- ей -- ией',
            plural: 'ами -- ями -- иями'
        },
        {
            caso: 'preposicional',
            masculino: 'е -- ии',
            neutro: 'e',
            feminino: 'e -- ии',
            plural: 'ах -- ях -- иях'
        }
    ],
    meses = {
        section: {
            id: 'meses'
        }
    },
    meses_ano = {
        p: {
            class: 'meses_ano'
        }
    },
    num = {
        section: {
            id: 'num'
        }
    },
    pronomes = {
        section: {
            id: 'pronomes'
        }
    },
    title_tab_pronomes = [
        {
            h2: {
                id: 'title-tab-pronomes'
            }
        },
        'Declinação dos pronomes pessoais'
    ],
    tab_pronomes = [
        {
            Pronome: "Eu", Nominativo: "Я", Genitivo: "Меня",
            Dativo: "Мне", Acusativo: "Меня",
            Instrumental: "мной", Preposicional: "(oбо) мне"
        },
        {
            Pronome: "Tu", Nominativo: "Ты", Genitivo: "Тебя",
            Dativo: "Тебе", Acusativo: "Тебя",
            Instrumental: "тобой", Preposicional: "(o) тебе"
        },
        {
            Pronome: "Nós", Nominativo: "Мы", Genitivo: "Нас",
            Dativo: "Нам", Acusativo: "Вас",
            Instrumental: "нами", Preposicional: "(o) нас"
        },
        {
            Pronome: "Nós", Nominativo: "Мы", Genitivo: "Нас",
            Dativo: "Нам", Acusativo: "Вас",
            Instrumental: "нами", Preposicional: "(o) нас"
        },
        {
            Pronome: "Vós", Nominativo: "Вы", Genitivo: "Вас",
            Dativo: "Вам", Acusativo: "Их",
            Instrumental: "вами", Preposicional: "(o) вас"
        },
        {
            Pronome: "Eles / Elas", Nominativo: "Они",
            Genitivo: "Их", Dativo: "Им", Acusativo: "Их",
            Instrumental: "ими", Preposicional: "(o) них",
        }
    ];