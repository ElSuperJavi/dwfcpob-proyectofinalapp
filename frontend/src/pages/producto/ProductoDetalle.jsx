// ProductoDetalle.jsx
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ImagenGaleria} from '../../components/gallery/ImagenGaleria'
import {ProductoService} from '../../services/producto.service'
import './ProductoDetalle.css';
import '../../components/layout/Layout.css'

export const ProductoDetalle=()=>{
    const {sku}=useParams()
    console.log('sku', sku)
    const objProducto=new ProductoService()
    // Datos de ejemplo (reemplaza con tus propios datos)
    const [buscar, setBuscar]=useState([])
    const [carrito, setCarrito]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [cantidad_carrito, setCantidadCarrito]=useState(1);
    const handleIncrementar=()=>{
        setCantidadCarrito(cantidad_carrito+1);
    };
    const handleDecrementar=()=>{
        if(cantidad_carrito>1){
            setCantidadCarrito(cantidad_carrito-1);
        }
    };
    const agregarCarrito=(p)=>{
        const carrito=localStorage.getItem('carrito') || '[]'
        const carrito_parse=JSON.parse(carrito)
        const productos_en_el_carrito=carrito_parse.find((c)=>c.id===p.id)
        if(productos_en_el_carrito){
            const carrito_nuevo=carrito_parse.map((c)=>{
                if(c.id===p.id)
                return{
                    ...c,
                    cantidad: c.cantidad+cantidad_carrito,
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

    useEffect(()=>{
        objProducto.get_by_sku(sku).then((r)=>{
            if(r){
                setBuscar(r)
                console.log(r)
                // console.log(r[0].producto_imagenes)
            }
        })
    }, [])

    return (
        <section className='cuerpo'>
            <div className="product-detail-container">
                <div className="product-image">
                    {/* Aquí va la foto del producto */}
                    <ImagenGaleria imagenes={buscar.producto_imagenes}/>
                    {/* <img src="http://res.cloudinary.com/dftssxe9q/image/upload/v1712840734/r5rnfnvbahwgjs7uxutb.webp" alt="Producto" /> */}
                </div>
                <div className="product-info">
                    <h1 className="product-title">{buscar.nombre}</h1>
                    <div className="product-description">
                        {buscar.descripcion}
                    </div>
                    <div className="product-attributes" key={buscar.id}>
                        {/* Aquí van las pestañas con los atributos */}
                        {/* {productAttributes.map((attr, index) => ( */}
                            <>
                            <div className="attribute-tab">
                                <span className="attribute-label">Precio</span>
                                <span className="attribute-value">${buscar.precio}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Peso</span>
                                <span className="attribute-value">{buscar.peso} {buscar.magnitud_simbolo}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">SKU</span>
                                <span className="attribute-value">{buscar.sku}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Categoria</span>
                                <span className="attribute-value">{buscar.categoria_nombre}</span>
                            </div>
                            <Link to={`/marca/${buscar.marca_ceo}`}>
                            <div className="attribute-tab">
                                <span className="attribute-label">Marca</span>
                                <span className="attribute-value">{buscar.marca_nombre}</span>
                            </div>
                            </Link>
                            <div className="attribute-tab">
                                <span className="attribute-label">Magnitud</span>
                                <span className="attribute-value">{buscar.magnitud_simbolo}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Modelo</span>
                                <span className="attribute-value">{buscar.modelo_nombre}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Material</span>
                                <span className="attribute-value">{buscar.material_nombre}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Color</span>
                                <span className="attribute-value">{buscar.color_nombre}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Estilo</span>
                                <span className="attribute-value">{buscar.estilo_nombre}</span>
                            </div>
                            <div className="attribute-tab">
                                <span className="attribute-label">Acabado</span>
                                <span className="attribute-value">{buscar.acabado_nombre}</span>
                            </div>
                            </>
                        {/* ))}*/}
                    </div>
                    <div className="add-cart">
                        <div className="quantity-input">
                            <button onClick={handleDecrementar}>-</button>
                            <input type="number" value={cantidad_carrito} readOnly />
                            <button onClick={handleIncrementar}>+</button>
                        </div>
                        <button className="add-to-cart-button" onClick={()=>agregarCarrito(buscar)}>
                            <i className="fa fa-shopping-cart cart-icon"></i> Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
