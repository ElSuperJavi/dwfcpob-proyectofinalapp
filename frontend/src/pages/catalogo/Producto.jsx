import React from "react"
import {ProductoCard} from "./ProductoCard"
import {NuevoProducto} from "../producto/ProductoListar"
// import "./estilo.css"

export const Producto=(/*{productItems, addToCart}*/)=>{
  return(
    <>
      {/* <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Productos</h1>
          </div>
          <ProductoCard
        //   productItems={productItems} addToCart={addToCart}
          />
        </div>
      </section> */}
      <NuevoProducto/>
    </>
  )
}