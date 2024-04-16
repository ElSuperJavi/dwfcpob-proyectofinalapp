import {Outlet} from 'react-router-dom'
// import NavBar from '../components/include/NavBar'
import {Header} from '../../common/header/Header'
import {Footer} from '../../common/footer/Footer'
import {nombre_tienda} from '../constants/Global'

export const Layout=()=>{
    return(
        <>
        <Header/>
        {/* Contenido - Inicio*/}
        <Outlet/>
        {/* Contenido - Fin*/}
        <Footer/>
        </>
    )
}