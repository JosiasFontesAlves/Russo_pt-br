export const header = {
    header: {
        class: 'blur2 bs_neon3 center fix flex w100'
    }
},
    drop = {
        section: {
            class: 'blur2 bs_neon2 drop_hidden fix grid',
            id: 'drop'
        }
    },
    lista_drop = {
        '#home': 'Início',
        '#alfabeto': 'Alfabeto',
        '#decl': 'Declinação',
        '#meses': 'Meses do ano',
        '#num': 'Números',
        '#semana': 'Dias da semana',
        '#pronomes': 'Pronomes pessoais'
    },
    props_linkBarr = [
        { class: 'grid' },
        { class: 'hover_float padd5' }
    ],
    temesc = {
        div: {
            class: 'flex',
            id: 'temesc'
        }
    },
    root = {
        div: {
            id: 'root'
        }
    },
    search = {
        section: {
            class: 'fix w100',
            id: 'search'
        }
    },
    props_searchBox = [
        {
            class: 'blur2 brd_nardo br15 bs_neon2 padd5 w70',
            id: 'txt-search'
        },
        {
            class: 'br50 bs_neon3',
            id: 'btn-search'
        },
    ],
    res = {
        p: {
            class: 'blur2 br7 brd_nardo padd7 w70',
            hidden: true, id: 'res'
        }
    },
    btn_close = {
        button: {
            class: 'br7',
            id: 'btn-res'
        }
    },
    container = {
        section: {
            class: 'grid',
            id: 'container'
        }
    },
    blocos = {
        div: {
            class: 'blocos br7 brd_nardo bs_neon3 padd5'
        }
    },
    h2_letra = {
        h2: {
            class: 'letra padd5'
        }
    },
    p_trads = {
        p: {
            class: 'padd5 trads'
        }
    },
    footer = {
        footer: {
            class: 'fix grid w100'
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
            class: 'meses_ano padd7'
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