export const body_childs = [
    {
        header: {
            class: 'bg_vidro center flex padd7'
        }
    },
    {
        main: {
            class: 'w100 flex center'
        }
    },
    'footer'
],
    header_childs = [
        {
            button: {
                id: 'btn-menu', class: 'fix'
            }
        },
        {
            h1: {
                id: 'ttl'
            }
        },
        {
            div: {
                id: 'drop', class: 'bg_vidro fix'
            }
        }
    ],
    lista_drop = {
        '#home': 'Início',
        '#decl': 'Declinação',
        '#semana': 'Dias da semana',
        '#alfabeto': 'Alfabeto',
        '#meses': 'Meses do ano'
    },
    padd3 = {
        p: {
            class: 'padd3'
        }
    },
    temesc = {
        p: {
            id: 'temesc'
        }
    },
    mts = [{
        h6: {
            id: 'mts'
        }
    }],
    copyright = {
        mts: 'Josias Fontes Alves - Matsa \u00A9 2021'
    },
    kreatto_childs = {
        header: header_childs,
        footer: mts
    },
    lua = {
        img: {
            alt: 'lua', id: 'lua',
            src: './temesc.png',
            class: 'fix'
        }
    };