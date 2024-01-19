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
        path: '/ebooks/:categoryId',
        component: React.lazy(() => import('views/categories/Products')),
        authority: [],
    },
    {
        key: 'categorias.cursos',
        path: '/cursos/:categoryId',
        component: React.lazy(() => import('views/categories/Products')),
        authority: [],
    },
    {
        key: 'categorias.produtos',
        path: '/produtos/:categoryId',
        component: React.lazy(() => import('views/categories/Products')),
        authority: [],
    },
]
