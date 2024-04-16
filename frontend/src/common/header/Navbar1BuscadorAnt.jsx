import React, {useEffect, useState} from 'react';
import {ProductoService} from '../../services/producto.service'
import './Navbar1Buscador.css'
import {Link} from 'react-router-dom';
export const Navbar1Buscador=({productos})=>{
    const [buscar_palabra, setBuscarPalabra]=useState(''); // Estado para el texto de búsqueda
    const [producto_filtrado, setProductoFiltrado]=useState(productos); // Estado para los resultados filtrados
    const [palabra_resaltada, setPalabraResaltada]=useState('')
    const [resultadoguardar, setResultadoGuardar]=useState(null)
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







        
        const resultado20=producto_filtrado.map((v_t, i_t) => {
            const palabraLarga = v_t.nombre;
            const buscar_palabra2 = buscar_palabra;
            
            if (palabraLarga.includes(buscar_palabra2)) {
                // Si la palabra larga contiene la palabra a buscar, resáltala
                const palabras = palabraLarga.split(' ');
                const resultado2 = palabras.map((word, index) => {
                    const isHighlighted = word.toLowerCase() === buscar_palabra2.toLowerCase();
                    return (
                        <span
                            key={index}
                            style={{
                                backgroundColor: isHighlighted ? 'yellow' : 'transparent',
                            }}
                        >
                            {isHighlighted ? `${word} x` : `${word} `}
                        </span>
                    );
                });
                // Renderiza el resultado donde desees
                console.log(resultado2);
            } else {
                console.log("La palabra a buscar "+buscar_palabra2+" no está en la palabra larga "+palabraLarga+".");
            }
        })
                setPalabraResaltada(resultado20)
    };
  
    const handleLimpiar = () => {
        setBuscarPalabra('');
        setProductoFiltrado([])
    };
    const resaltarPalabra = (textoCompleto, palabraBusqueda) => {
        const regex = new RegExp(`(${palabraBusqueda})`, 'gi');
        return textoCompleto.replace(regex, '<span style="background-color: yellow">$1</span>');
    };
    const objProducto=new ProductoService()
    
    useEffect(()=>{
    }, [])// Supongamos que tienes una palabra larga en v_p.nombre y quieres resaltar la palabra "buscar_palabra"

    return(
        <>
        <section className='search'>
            <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' onChange={handleSearchChange} placeholder='Escriba y presione enter...' value={buscar_palabra}/>
                {/* <ul>
                </ul> */}
                {buscar_palabra && (
                <>
                {/* // <button className="clear-button" onClick={handleLimpiar}>
                //     <i className="fa fa-times" aria-hidden="true"></i>
                // </button>
                // <div className="boton-contenedor"> */}
                    {/* <button className="boton" onClick={handleLimpiar}> */}
                        <i className="fa fa-times icon-circle" aria-hidden="true"></i>
                    {/* </button> */}
                {/* </div> */}
                {/* // <i className="fa fa-times" aria-hidden="true" onClick={handleLimpiar}></i> */}
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
                                <h3>{v_p.nombre}</h3>
                                <div onChange={handleSearchChange}>{palabra_resaltada}</div>{/* <p>{v_p.categoria_nombre}</p> */}
                            </a>
                        </div>
                        {/* <div className='text-column'>
    <a href={`/producto/${v_p.sku}`}>
        <h3>{v_p.nombre}</h3>
        <p>
            {v_p.nombre.split('').map((word, index) => {
                const isHighlighted = word.toLowerCase() === buscar_palabra.toLowerCase();
                return (
                    <span
                        key={index}
                        style={{
                            backgroundColor: isHighlighted ? 'yellow' : 'transparent',
                        }}
                    >
                        {isHighlighted ? word : `${word} `}
                    </span>
                );
            })}
        </p>
    </a>
</div> */}
                        






                        {/* <div className='text-column'>
    <a href={`/producto/${v_p.sku}`}>
        <h3>{v_p.nombre}</h3>
        <p>
            {v_p.nombre.split('').map((word, index) => (
                buscar_palabra.split('').map((wb, ib) => {
                    const isHighlighted = word.toLowerCase() === wb.toLowerCase();
                    if(isHighlighted){
                    console.log('isHighlighted: ', word)
                    return (
                        <>
                        <span
                            key={index}
                            style={{
                                backgroundColor: isHighlighted ? 'yellow' : 'transparent',
                            }}
                        >
                            {isHighlighted ? word : `${word} `}
                        </span>
                        </>
                    );
                }
                })
            ))}
        </p>
    </a>
</div> */}



                    </div>
                </li>
                </>
            )})}
            {/* Agrega más elementos aquí */}
        </ul>
        </>
    )
}