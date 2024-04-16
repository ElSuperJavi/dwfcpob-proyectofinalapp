import {useEffect, useState} from "react";
import {CategoriaService} from "../../services/categoria.service";

export const Categoria=()=>{
  const objCategoria=new CategoriaService()
  const [categorias, setCategorias]=useState([])
  useEffect(()=>{
    objCategoria.get_all().then((datos)=>{
      if(datos){
        setCategorias(datos);
      }
    });
  }, []);
  return(
    <>
      Nivel 1
      <div className='category'>
        {console.log('Categorías Nivel 1: ', categorias)}
        {categorias.map((v, i)=>{
          if(v.nivel===1)
          return(
            <div className='box f_flex' key={i}>
              <img src={v.imagen} alt=''/>
              <span>{v.nombre}</span>
            </div>
          )
        })}
      </div>
      Nivel 2
      <div className='category'>
        {/* Ambos valores irán cambiando de acuerdo con el onmouse */}
        {console.log('Categorías Nivel 2 - Nivel_Padre 1: ', categorias)}
        {categorias.map((v, i)=>{
          if(v.nivel===2
            &&
            v.nivel_padre===1
            )
          return(
            <div className='box f_flex' key={i}>
              <img src={v.imagen} alt=''/>
              <span>{v.nombre}</span>
            </div>
            // categorias.map((v2, i2)=>{
            //   // if(v2.nivel===2 && v2.nivel_padre===1)
            //     return(
            //       <div className='box f_flex' key={i2}>
            //         <img src={v2.imagen} alt=''/>
            //         <span>{v2.nombre}</span>
            //       </div>
            //     )
            // })
            )
        })}
      </div>

    </>
  )
}