import React, {useEffect, useState} from "react"
import {Link, useParams} from 'react-router-dom';
import {MarcaService} from '../../services/marca.service'
import './Marca.css'
import '../../components/layout/Layout.css'
export const Marca=(props)=>{
    const {ceo}=useParams()
    console.log('ceo', ceo)
    const objMarca=new MarcaService()
    const [marca, setMarca]=useState([])
    const [marcaimagen, setMarcaImagen]=useState([])
    const [marcacategoriaimagen, setMarcaCategoriaImagen]=useState([])
    useEffect(()=>{
        objMarca.get_by_id(ceo).then((r)=>{
            if(r){
                console.log(r)
                setMarca(r.nombre);
                setMarcaImagen(r.marca_imagenes);
                setMarcaCategoriaImagen(r.marca_categoria_imagenes);
            }
        });
    }, []);
    {console.log(marcacategoriaimagen)}
    return(
        <>
{/*  */}
{/* <div className="marca">
    <ul>
        <li>
            <div className="icon"><i className="fa-brands fa-codepen"></i></div>
            <div className="title">Codepen</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
        </li>
        <li>
            <div className="icon"><i className="fa-brands fa-html5"></i></div>
            <div className="title">HTML 5</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
        <li>
            <div className="icon"><i className="fa-brands fa-css3"></i></div>
            <div className="title">CSS 3</div>
            <div className="descr">Lorem ipsum dolor sit.</div>
        </li>
        <li>
            <div className="icon"><i className="fa-brands fa-js"></i></div>
            <div className="title">Javascript</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
        </li>
        <li>
            <div className="icon"><i className="fa-brands fa-github"></i></div>
            <div className="title">Github</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
    </ul>
</div> */}
{/*  */}
        {/* <div className="container"> */}
        <div class="envio-gratis">
            Envío Gratis a Todo USA en compras superiores a $100.00
        </div>
        <div className="banner">
            {marcaimagen.length>=2&&(
            <>
            <img key={marcaimagen[0]['id']} className="desktop" src={marcaimagen[0]['imagen']} alt=""/>
            <img key={marcaimagen[1]['id']} className="mobile" src={marcaimagen[1]['imagen']} alt=""/>
            </>
            )}
        </div>
        <section className='cuerpo'>
            <div className="marca">
                <h1>{marca}</h1>
                {marcacategoriaimagen.length>0 && (
                    <>
                    <h3>Categorías</h3>
                    </>
                    )
                }
                <ul>
                {marcacategoriaimagen.map((v, id)=>{
                    {console.log(v)}
                    return(
                        <>
                            <li>
                                {/* <div className="icon"><i className="fa-brands fa-codepen"></i></div> */}
                                <div className="icon"><img src={v.imagen} alt="" width={'100%'} height={'auto'}/></div>
                                <div className="title">{v.nombre}</div>
                                <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
                            </li>
                            {/* <div className="item features-without-image col-2 col-md-3 col-lg-2 col-xl-2 active">
                                <div className="item-wrapper">
                                    <div className="card-box align-left">
                                        <p>¡Increíble variedad de marcas y productos! Encontré exactamente lo que buscaba.</p>
                                        <div className="img-wrapper mt-4 mb-3">
                                            <img src={v.imagen} alt="" data-slide-to="0" data-bs-slide-to="0"/>
                                        </div>
                                        <h5>
                                            <strong>{v.nombre}</strong>
                                        </h5>
                                    </div>
                                </div>
                            </div> */}
                        </>
                    )
                })}
                </ul>
            </div>
        </section>
        {/* </div> */}
        {/* <ul>
            <li>
                <Link to={v.id}><img src={v.imagen}/></Link>
            </li>
        </ul> */}
        {/* <h1>Categorías</h1>
        <ul>
            {marcacategoriaimagen.map((v, id)=>{
                {console.log(v)}
                return(
                    <>
                        <li>
                            <Link to={v.id}><img src={v.imagen}/></Link>
                            <Link to={v.id}>{v.nombre}</Link>
                        </li>
                    </>
                )
            })}
        </ul> */}
        </>
    )
}