import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import {SesionHelper} from '../../helpers/Auth'
export const Navbar1Usuario=()=>{
    const objSesionHelper=new SesionHelper()
    const [contar, setContar]=useState([])
    const contadorCarrito=()=>{
        const carrito=JSON.parse(localStorage.getItem('carrito'));
        const cantidad=carrito?carrito.length:0;
        setContar(cantidad)
    }
    useEffect(()=>{
        contadorCarrito()
    }, []);
    return(
        <>
        <div className='icon f_flex width'>
            <Link to="#"><i className="fas fa-search icon-circle"></i></Link>
            <Link to="#"><i className="far fa-heart icon-circle"></i></Link>
            {
                !objSesionHelper.estaAutenticado?
                    (
                        <Link to="/usuario"><i className="fas fa-user icon-circle"></i></Link>
                    ):
                    (
                        <Link to="/perfil"><i className="fas fa-user icon-circle"></i></Link>
                    )
            }
            <div className='cart'>
                <Link to='/carrito'>
                    <i className='fa fa-shopping-bag icon-circle'></i>
                    {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                    <span>{contar}</span>
                </Link>
            </div>
        </div>
        <div className="mobile-menu-trigger">
            <span></span>
        </div>
        </>
    )
}