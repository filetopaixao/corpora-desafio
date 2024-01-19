import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'categorias.ebooks',
        path: '/ebooks',
        component: React.lazy(() => import('views/categorias/Ebooks')),
        authority: [],
    },
    {
        key: 'categorias.cursos',
        path: '/cursos',
        component: React.lazy(() => import('views/categorias/Cursos')),
        authority: [],
    },
    {
        key: 'categorias.produtos',
        path: '/produtos',
        component: React.lazy(() => import('views/categorias/Produtos')),
        authority: [],
    },
]
