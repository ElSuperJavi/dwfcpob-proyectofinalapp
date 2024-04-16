import React, {useEffect, useState} from "react"
import {Helmet} from 'react-helmet'
import logo from '../../assets/img/principal/logo.png'
// import '../../assets/css/navbar/estilo.css'
import {ProductoService} from '../../services/producto.service'
import {Navbar1Buscador} from "./Navbar1Buscador"
import {Navbar1Usuario} from "./Navbar1Usuario"
import {Link} from 'react-router-dom'
import {nombre_tienda} from '../../components/constants/Global'
export const Navbar1=()=>{
    const objProducto=new ProductoService()
    const [listar_producto, setListarProducto]=useState([])
    useEffect(()=>{
        objProducto.get_all().then((r)=>{
            if(r){
                console.log(r)
                setListarProducto(r);
            }
        });
    }, [])
    return(
        <>
        <Helmet>
            <script src="src/assets/js/navbar.js"></script>
        </Helmet>
        <section className="search">
            <header className="header" style={{backgroundColor: ''}}>
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">
                            <div className="logo">
                                {/* <a href="#">{nombre_tienda}</a> */}
                                {/* <Link to='/'>{nombre_tienda}</Link> */}
                                <Link to='/'><img src={logo} alt=''/></Link>
                            </div>
                        </div>
                        <div className="header-item item-center">
                            <div className="menu-overlay">
                            </div>
                            <Navbar1Buscador productos={listar_producto}/>
                        </div>
                        <div className="header-item item-right">
                            <Navbar1Usuario/>
                        </div>
                    </div>
                </div>
            </header>
        </section>
        </>
    )
}