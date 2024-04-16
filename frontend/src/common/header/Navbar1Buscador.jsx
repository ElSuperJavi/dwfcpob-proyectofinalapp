import React, {useEffect, useState} from 'react';
import {ProductoService} from '../../services/producto.service'
import './Navbar1Buscador.css'
import {Link} from 'react-router-dom';
export const Navbar1Buscador=({productos})=>{
    const [buscar_palabra, setBuscarPalabra]=useState(''); // Estado para el texto de búsqueda
    const [producto_filtrado, setProductoFiltrado]=useState(productos); // Estado para los resultados filtrados
    const [palabra_resaltada, setPalabraResaltada]=useState('')
    const handleSearchChange=(e)=>{
        const buscar_palabra=e.target.value;
        setBuscarPalabra(buscar_palabra);
        const producto_filtrado=buscar_palabra?productos.filter((r)=>
            r.nombre.toLowerCase().includes(buscar_palabra.toLowerCase())
        ):[];
        if(!buscar_palabra||buscar_palabra.length>0){
            setProductoFiltrado(producto_filtrado);           
        }else{
            setProductoFiltrado([]);            
        }
    }
    const handleLimpiar=()=>{
        setBuscarPalabra('');
        setProductoFiltrado([])
    }
    const objProducto=new ProductoService()
    
    useEffect(()=>{
    }, [])// Supongamos que tienes una palabra larga en v_p.nombre y quieres resaltar la palabra "buscar_palabra"

    return(
        <>
        <section className='search'>
            <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' onChange={handleSearchChange} placeholder='Escriba y presione enter...' value={buscar_palabra}/>
                {buscar_palabra && (
                    <>
                    <i aria-hidden="true" className="fa fa-times icon-circle" onClick={handleLimpiar}></i>
                    </>
                )}
                <span>Todas las categorías</span>
            </div>
        </section>
        <ul className='contenedor-buscador'>
            {producto_filtrado.map((v_p)=>{
                return(
                <>
                <li key={v_p.id}>
                    <div className='content-container'>
                        <div className='image-column'>
                            <Link to={`${v_p.producto_imagen}`}><img src={v_p.producto_imagen} alt=''/></Link>
                        </div>
                        <div className='text-column'>
                            <a href={`/producto/${v_p.sku}`}>
                                <p className='nombre'>{v_p.nombre}</p>
                                <p className='categoria'>{v_p.categoria_nombre}</p>
                            </a>
                        </div>
                    </div>
                </li>
                </>
            )})}
        </ul>
        </>
    )
}