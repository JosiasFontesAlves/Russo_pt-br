export const header = {
    header: {
        class: 'vidro_neon center flex fix padd3 w100'
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
            class: 'center flex'
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
            class: 'trad'
        }
    },
    res = {
        p: {
            class: 'br15 padd5 vidro_neon',
            hidden: true, id: 'res'
        }
    },
    searchBox = [
        {
            id: 'txt', type: 'text', class: 'br15 padd5',
            placeholder: 'Pesquisar no dicionário'
        },
        { id: 'ok' }
    ],
    close = {
        button: {
            id: 'close', class: 'br15'
        }
    },
    blocos = {
        div: {
            class: 'brd_nardo bs_neon3 blocos'
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