export const header = {
    header: {
        class: 'vidro_neon center flex fix padd3 w100'
    }
},
    header_childs = [
        {
            button: {
                id: 'btn-menu',
                class: 'fix'
            }
        },
        {
            h1: {
                id: 'ttl'
            }
        },
        {
            div: {
                id: 'drop',
                class: 'vidro_neon fix grid padd3'
            }
        }
    ],
    temesc = {
        div:
        {
            id: 'temesc',
            class: 'center flex'
        }
    },
    lista_drop = {
        '#home': 'Início',
        '#decl': 'Declinação',
        '#semana': 'Dias da semana',
        '#alfabeto': 'Alfabeto',
        '#meses': 'Meses do ano'
    },
    lua = {
        img: {
            alt: 'lua', id: 'lua',
            src: './img/temesc.png'
        }
    },
    main = {
        main: {
            class: 'center flex w100'
        }
    },
    main_childs = [
        {
            section: {
                id: 'search',
                class: 'center flex'
            }
        },
        {
            div: {
                id: 'container',
                class: 'grid'
            }
        }
    ],
    res = {
        p: {
            id: 'res',
            class: 'br_20 padd5 vidro_neon'
        }
    },
    searchBox = [
        {
            id: 'txt', type: 'text', class: 'br_20 padd5',
            placeholder: 'Pesquisar no dicionário'
        },
        { id: 'ok' }
    ],
    blocos = {
        div: {
            class: 'blocos'
        }
    },
    footer = {
        footer: {
            class: 'center flex fix w100'
        }
    },
    copyright = {
        h6: {
            id: 'copyright'
        }
    }