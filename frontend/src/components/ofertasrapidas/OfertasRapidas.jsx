import React from "react"
import {OfertasRapidasCard} from "./OfertasRapidasCard"
import "./estilo.css"

export const OfertasRapidas=({productItems, addToCart}) => {
  return(
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Ofertas Rápidas</h1>
          </div>
          <OfertasRapidasCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}