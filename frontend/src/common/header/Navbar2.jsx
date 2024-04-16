import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import logo from '../../assets/img/principal/logo.png'
// import {CategoriaService} from "../../services/categoria.service"
import './Header.css'
import '../../assets/css/navbar/estilo.css'
import {Navbar2Menu} from './Navbar2Menu'
import '../../components/layout/Layout.css'

export const Navbar2=()=>{
    // const objCategoria=new CategoriaService()
    return(
        <>
        <section className="search">
            <header className="header" style={{backgroundColor: ''}}>
                <div className="container">
                    <div className="row v-center">
                        {/* <div className="header-item item-left">
                            <div className="logo">
                                <img src={logo}/>
                            </div>
                        </div> */}
                        <div className="header-item item-todo">
                            <div className="menu-overlay">
                            </div>
                            <Navbar2Menu/>
                        </div>
                        {/* <div className="header-item item-right">
                            <div className='icon f_flex width'>
                                <Link to="#"><i className="fas fa-search icon-circle"></i></Link>
                                <Link to="#"><i className="far fa-heart icon-circle"></i></Link>
                                <Link to="/usuario"><i className="fas fa-user icon-circle"></i></Link>
                                <div className='cart'>
                                    <Link to='/carrito'>
                                        <i className='fa fa-shopping-bag icon-circle'></i>
                                        <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                                        <span>1</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mobile-menu-trigger">
                                <span></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </section>
      {/* <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            zxc
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                <span>1</span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
        </>
    )
}