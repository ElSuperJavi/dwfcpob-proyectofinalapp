// import React, {useState} from "react"
import {useEffect, useState} from "react";
import {get_all_p} from "../../services/producto.serviceAnt2";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import predeterminada_producto from '../../assets/img/predeterminada/producto.png'

const SampleNextArrow=(props)=>{
  const {onClick}=props
  return(
    <div className='control-btn' onClick={onClick}>
        <button className='next'>
            <i className='fa fa-long-arrow-alt-right'></i>
        </button>
    </div>
  )
}
const SamplePrevArrow=(props)=>{
  const {onClick}=props
  return(
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
// import {datos} from "./datos"
// const {listar}=datos

export const ProductoCard=()/*({listar, addToCart})*/ => {
  const [carrito, setCarrito]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
  const [listar, setListar]=useState([])
  useEffect(()=>{
    get_all_p().then((r)=>{
      if(r){
        setListar(r)
      }
    })
  }, [])
  const agregarCarrito=(p)=>{
    const carrito=localStorage.getItem('carrito') || '[]'
    const carrito_parse=JSON.parse(carrito)
    const productos_en_el_carrito=carrito_parse.find((c)=>c.id===p.id)
    if(productos_en_el_carrito){
      const carrito_nuevo=carrito_parse.map((c)=>{
        if(c.id===p.id)
          return{
            ...c,
            cantidad: c.cantidad+1,
            total: parseFloat(c.total)+parseFloat(c.precio)
          }
        return c
      })
      localStorage.setItem('carrito', JSON.stringify(carrito_nuevo))
      setCarrito(carrito_nuevo)
      return
    }
    const producto_nuevo={
      ...p,
      cantidad: 1,
      total: parseFloat(p.precio)
    }
    localStorage.setItem('carrito', JSON.stringify([...carrito_parse, producto_nuevo]))
    setCarrito(carrito_nuevo)
  }
  const [corazon, setCorazon]=useState(0)
  const incrementarCorazon=()=>{
    setCorazon(corazon+1)
  }
  const settings={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  }

  return(
    <>
      <Slider {...settings}>
        {console.log(listar)}
        {listar.map((v, i)=>{
          // console.log(v)
          // console.log(v.producto_imagenes.first)
          return(
            <div className='box' key={v.id}>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>10% Off</span>
                  {/* <img src="https://res.cloudinary.com/dftssxe9q/image/upload/gqpplyd4zgqq0icfm6vh.png" width={207} height={200} alt='' /> */}
                  {console.log(v.producto_imagen)}
                  {/* <img src={v.producto_imagenes.first.imagen??''} width={207} height={200} alt='' /> */}
                  <img src={v.producto_imagen?v.producto_imagen:predeterminada_producto} width={207} height={200} alt=''/>
                  <div className='product-like'>
                    <label>{corazon}</label> <br />
                    <i className='fa-regular fa-heart' onClick={()=>incrementarCorazon()}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{v.nombre}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${v.precio} </h4>
                    <button onClick={()=>agregarCarrito(v)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}