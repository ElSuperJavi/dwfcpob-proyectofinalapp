import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter} from 'react-router-dom'
import {Layout} from '../components/layout/Layout'
import {Inicio} from '../pages/principal/Inicio'
import {Carrito} from '../pages/carrito/Carrito'
import {Usuario} from '../pages/usuario/Usuario'
import {Perfil} from '../pages/usuario/Perfil'
// import Categoria from '../pages/Categoria'
// import Marca from '../pages/Marca'
import {Catalogo} from '../pages/catalogo/Catalogo'
import {Marcas} from '../pages/marca/Marcas'
import {Marca} from '../pages/marca/Marca'
import {Orden} from '../pages/orden/Orden'
import {Ordenes} from '../pages/cliente/Ordenes'
import {OrdenDetalle} from '../pages/cliente/OrdenDetalle'
import {Gracias} from '../pages/cliente/Gracias'
import {ProductoDetalle} from '../pages/producto/ProductoDetalle'

const router=createBrowserRouter([
    {
        children: [
            {
                index: true,//Para indicar que es la página principal
                element: <Inicio/>,
                path: '/'
            },
            {
                element: <Usuario/>,
                path: '/usuario'
            },
            {
                element: <Perfil/>,
                path: '/perfil'
            },
            {
                element: <Carrito/>,
                path: '/carrito'
            },
            {
                element: <Catalogo/>,
                path: '/catalogo'
            },
            {
                element: <Marcas/>,
                path: '/marcas'
            },
            {
                element: <Marca/>,
                path: '/marca/:ceo'
            },
            {
                element: <ProductoDetalle/>,
                path: '/producto/:sku'
            },
            {
                element: <Orden/>,
                path: '/orden'
            },
            {
                element: <Ordenes/>,
                path: '/ordenes'
            },
            {
                element: <OrdenDetalle/>,
                path: '/orden/:codigo'
            },
            {
                element: <Gracias/>,
                path: '/orden/gracias'
            },
            // {
            //     element: <Login/>,
            //     path: '/login'
            // },
            // {
            //     element: <Marca/>,
            //     path: '/marcas'
            // },
        ],
        element: <Layout/>,
        path: '/'
    }
])

export default router