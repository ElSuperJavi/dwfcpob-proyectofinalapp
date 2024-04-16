import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductoDetalle.css';
import {ImagenGaleria} from '../../components/gallery/ImagenGaleria'

export const Producto = () => {
    const { sku } = useParams();
    console.log('sku', sku);
    // Datos de ejemplo (reemplaza con tus propios datos)
    const productImages = [
        'http://res.cloudinary.com/dftssxe9q/image/upload/v1712840734/r5rnfnvbahwgjs7uxutb.webp',
        'imagen2.jpg',
        'imagen3.jpg',
        // ... más imágenes
    ];

    return (
        <>
            <div className="product-detail-container">
                {/* Contenedor de imágenes con zoom */}
                {/* <div className="image-zoom-container">
                    <div className="fixed-size-container">
                        <div
                            className="product-image"
                            style={{
                                transform: `scale(${zoomLevel})`,
                                backgroundImage: `url(${productImages[currentImageIndex]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer', // Cambia el cursor al pasar el mouse
                                transition: 'transform 0.3s ease', // Transición suave
                            }}
                            onMouseMove={(e) => {
                                const { clientX, clientY } = e;
                                const { left, top, width, height } = e.target.getBoundingClientRect();
                                const x = (clientX - left) / width;
                                const y = (clientY - top) / height;
                                e.target.style.transformOrigin = `${x * 100}% ${y * 100}%`;
                            }}
                            onClick={handleToggleZoom} // Alternar zoom al hacer clic en la imagen
                        />
                    </div>
                </div> */}
                <ImagenGaleria/> {/* Muestra la galería con miniaturas */}
                {/* <ImagenZoom imageUrl="http://res.cloudinary.com/dftssxe9q/image/upload/v1712840734/r5rnfnvbahwgjs7uxutb.webp"/> Aplica el zoom en la imagen actual */}

                {/* Slider de imágenes */}
                {/* ... (código existente) */}
            </div>
        </>
    );
};
