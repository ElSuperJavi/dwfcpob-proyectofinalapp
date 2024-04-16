import React, {useEffect, useRef, useState} from "react"
import {MarcaService} from '../../services/marca.service'
import {Link} from "react-router-dom"
import '../../components/layout/Layout.css'
import './Marcas.css'
import marca_imagen_1 from '../../assets/img/layout/marcas-1.png'
import marca_imagen_2 from '../../assets/img/layout/marcas-2.png'
export const Marcas=()=>{
    const alfabeto="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const objMarca=new MarcaService()
    const [marcas, setMarcas]=useState([])
    const primerasLetras=new Set(marcas.map(m=>m.nombre.charAt(0)));
    const disponible=[...primerasLetras]
    const scrollToRef=useRef(null)
    const handleScrollToElement=()=>{
        scrollToRef.current.scrollIntoView({
            behavior: "smooth", // Animación de desplazamiento suave
            block: "start", // Posición del elemento en la parte superior de la ventana
        })
    }
    console.log(disponible);
    useEffect(()=>{
        objMarca.get_all().then((r)=>{
            if(r){
                setMarcas(r);
                console.log(r)
            }
        })
    }, [])
    return(
        <>
        <div className="banner">
            <img className="desktop" src={marca_imagen_1} alt=""/>
            <img className="mobile" src={marca_imagen_2} alt=""/>
        </div>
        <section className='cuerpo'>
            <div className="marcas">
                <h1>Marcas</h1>
                <ul className="alfabeto-lista">
                    {alfabeto.split("").map((v_a, v_i)=>(
                        <li className="alfabeto-item">
                            <Link key={v_i} onClick={handleScrollToElement} to={`#letra-${v_a}`}>{v_a}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="marca-lista">
                    {disponible.map((v_d, i_d)=>(
                        <>
                        <li>
                            <p key={v_d} className="letra-titulo" id={`letra-${v_d}`}>{v_d}</p>
                            <ul>
                                {marcas.map((v_m, i_m)=>{
                                    // console.log(v_m.nombre.charAt(0))
                                    // console.log(v_d)
                                    if(v_m.nombre.charAt(0).toUpperCase()===v_d){
                                        return(
                                            <>
                                            <li key={i_d}>
                                                <Link className="marca-item" to={`/marca/${v_m.ceo}`}>{v_m.nombre}</Link>
                                            </li>
                                            </>
                                        )
                                    }
                                })}
                            </ul>
                        </li>
                        </>
                ))}
                </ul>
            </div>
        </section>
        </>
    )
}