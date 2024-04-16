import React from "react"
import "./estilo.css"
import {CarritoTop} from "./CarritoTop"

export const CategoriaTop=()=>{
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
            <div className='heading d_flex'>
                <div className='heading-left row  f_flex'>
                    <i className='fa-solid fa-border-all'></i>
                    <h2>Categorías Top</h2>
                </div>
                <div className='heading-right row '>
                    <span>Ver todas</span>
                    <i className='fa-solid fa-caret-right'></i>
                </div>
            </div>
            <CarritoTop/>
        </div>
      </section>
    </>
  )
}