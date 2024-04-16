import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importa los estilos CSS

export const ImagenGaleria=({imagenes})=>{
    // Datos de ejemplo (reemplaza con tus propias imágenes)
//    console.log(p_imagenes)
//    const images=[
//        {
//            original: 'http://res.cloudinary.com/dftssxe9q/image/upload/v1712840734/r5rnfnvbahwgjs7uxutb.webp',
//            thumbnail: 'http://res.cloudinary.com/dftssxe9q/image/upload/v1712840734/r5rnfnvbahwgjs7uxutb.webp',
//        },
//        {
//            original: 'https://res.cloudinary.com/dftssxe9q/image/upload/v1712841778/chsyt0hkbsludfhembmj.webp',
//            thumbnail: 'https://res.cloudinary.com/dftssxe9q/image/upload/v1712841778/chsyt0hkbsludfhembmj.webp',
//        },
//        // ... más imágenes
//    ];
    // let image=(_original, _thumbnail)=>{
    //     {return {original: _original, thumbnail: _thumbnail}}
    // }
    // Object.values(p_imagenes).map((v, i)=>{
    //     v.original=v.imagen
    // })

    if(!imagenes||imagenes.length===0) {
        return <div>No hay imágenes disponibles.</div>;
    }
    const imagenes_map=imagenes.map((v_pi)=>({
        original: v_pi.imagen,
        thumbnail: v_pi.imagen,
        id: v_pi.id
    }));

    return (
        <div className="my-gallery">
            <ImageGallery items={imagenes_map}/>
        </div>
    );
};