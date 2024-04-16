// import React from "react"
import './Header.css'
import {Head} from './Head'
import {Search} from './SearchAnt'
import {NavbarAnt} from './NavbarAnt'
import {Navbar} from './Navbar'

export const Header=()=>{
  return(
    <>
      <Head/>
      {/* <Search/> */}
      {/* <NavbarAnt/> */}
      <Navbar/>
    </>
  )
}