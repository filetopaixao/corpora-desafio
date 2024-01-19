import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [ 
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'categorias',
        path: '',
        title: 'Categorias',
        translateKey: 'nav.categorias.collapseMenu',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'categorias.ebooks',
                path: '/ebooks?id=1',
                title: 'E-books',
                translateKey: 'nav.categorias.ebooks',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'categorias.cursos',
                path: '/cursos?id=2',
                title: 'Cursos',
                translateKey: 'nav.categorias.cursos',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'categorias.produtos',
                path: '/produtos?id=3',
                title: 'Produtos',
                translateKey: 'nav.categorias.produtos',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
