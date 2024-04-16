import {useEffect, useState} from "react";
import {getCategoriasService} from "../../services/categoria.service";
import {getProductosService} from "../../services/producto.service";

export const Categoria=()=>{
  const [categorias, setCategorias]=useState([])
  useEffect(()=>{
    getCategoriasService().then((datos) => {
      if(datos){
        setCategorias(datos);
      }
    });
  }, []);
  return(
    <>
      {/* <div className='category'>
        {datos.map((v, i)=>{
          return(
            <div className='box f_flex' key={i}>
              <img src={v.cateImg} alt='' />
              <span>{v.cateName}</span>
            </div>
          )
        })}
      </div> */}
      <div className='category'>
        {console.log('Categorías: ', categorias)}
        {categorias.map((v, i) => {
          return(
            <div className='box f_flex' key={i}>
              <img src={v.cateImg} alt='' />
              <span>{v.nombre}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}