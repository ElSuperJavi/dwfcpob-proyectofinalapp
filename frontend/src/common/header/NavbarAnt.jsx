import React, {useState} from "react"
import {Link} from "react-router-dom"

export const NavbarAnt=()=>{
    const [MobileMenu, setMobileMenu]=useState(false)
    return (
        <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='catgrories d_flex'>
                    <span className='fa-solid fa-border-all'></span>
                    <h4>
                        Categorías <i className='fa fa-chevron-down'></i>
                    </h4>
                </div>
                <div className='navlink'>
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    {/* <ul> */}
                        {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/catalogo'>Catálogo</Link>
                        </li>
                        <li>
                            <Link to='/pages'>paginas</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>vendor account</Link>
                        </li>
                        <li>
                            <Link to='/track'>track mi orden</Link>
                        </li>
                        <li>
                            <Link to='/contaco'>contacto</Link>
                        </li>
                    </ul>
                    <button className='toggle' onClick={()=>setMobileMenu(!MobileMenu)}>
                        {MobileMenu?<i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </header>
        </>
    )
}