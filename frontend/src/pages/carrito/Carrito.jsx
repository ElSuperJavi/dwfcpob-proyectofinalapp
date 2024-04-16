import {useState} from "react";
import "./estilo.css"
import '../../components/layout/Layout.css'
import {Link} from "react-router-dom";
import {Header} from '../../common/header/Header'
import {Footer} from '../../common/footer/Footer'
import {ProductoCard} from '../catalogo/ProductoCard'
import predeterminada_producto from '../../assets/img/predeterminada/producto.png'
import {SesionHelper} from '../../helpers/Auth'

export const Carrito=(/*{carrito, handleAgregar, quitarCarrito}*/) => {
    // Stpe: 7 calculate total of items
//    const precio_total=carrito.reduce((price, objeto) => price + objeto.qty * objeto.price, 0)
    const objSesionHelper=new SesionHelper()
    const [carrito, setCarrito]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const agregarCarrito=(p)=>{
        // <ProductoCard agregarCarrito={p}/>
        const carrito=localStorage.getItem('carrito') || '[]'
        const carrito_parse=JSON.parse(carrito)
        const productos_en_el_carrito=carrito_parse.find((c)=>c.id===p.id)
        if(productos_en_el_carrito){
            const carrito_nuevo=carrito_parse.map((c)=>{
                if(c.id===p.id){
                    return{
                        ...c,
                        cantidad: c.cantidad+1,
                        total: (parseFloat(c.total)+parseFloat(c.precio)).toFixed(2)
                    }
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
        total: parseFloat(p.precio).toFixed(2)
        }
        localStorage.setItem('carrito', JSON.stringify([...carrito_parse, producto_nuevo]))
        setCarrito(carrito_nuevo)
        console.log('click')
    }
    const quitarCarrito=(p)=>{
//        const carrito = localStorage.getItem("carrito") || "[]";
//        const carrito_parse = JSON.parse(carrito);
//        const producto_en_el_carrito = carrito_parse.find((c) => c.id === p.id);
//      
//        if (producto_en_el_carrito) {
//          let carrito_nuevo;
//          // Si la cantidad es mayor a 1, disminuimos la cantidad
//          if (producto_en_el_carrito.cantidad > 1) {
//            carrito_nuevo = carrito_parse.map((c) => {
//              if (c.id === p.id) {
//                return {
//                  ...c,
//                  cantidad: c.cantidad - 1,
//                  total: parseFloat(c.total) - parseFloat(c.precio)
//                };
//              }
//              return c;
//            });
//          } else {
//            // Si la cantidad es 1, eliminamos el producto del carrito
//            carrito_nuevo = carrito_parse.filter((c) => c.id !== p.id);
//          }
//          localStorage.setItem('carrito', JSON.stringify(carrito_nuevo));
//          setCarrito(carrito_nuevo); // Asumiendo que setCarrito actualiza el estado en tu componente
//        } else {
//          // Si el producto no está en el carrito, no deberíamos hacer nada
//          console.log('El producto no está en el carrito');
//        }
//      };
//
        const carrito=localStorage.getItem('carrito') || '[]'
        const carrito_parse=JSON.parse(carrito)
        // console.log(carrito);
        const productos_en_el_carrito=carrito_parse.find((c)=>c.id===p.id)
        if(productos_en_el_carrito){
            let carrito_nuevo
            if(productos_en_el_carrito.cantidad>1){
                carrito_nuevo=carrito_parse.map((c)=>{
                    if(c.id===p.id){
                        return{
                            ...c,
                            cantidad: c.cantidad-1,
                            total: (parseFloat(c.total)-parseFloat(c.precio)).toFixed(2)
                        }
                    }
                    return c
                })
            }else{
                carrito_nuevo=carrito_parse.filter((c)=>c.id!==p.id)
            }
            localStorage.setItem('carrito', JSON.stringify(carrito_nuevo))
            setCarrito(carrito_nuevo);
            // const producto_nuevo={
            //     ...p,
            //     cantidad: 1,
            //     total: parseFloat(p.precio)
            // }
            // localStorage.setItem('carrito', JSON.stringify([...carrito_parse, producto_nuevo]))
            // setCarrito(carrito_nuevo);
            console.log('Producto Quitado');
        }
        console.log('click')
    }
    
    const eliminarCarrito=(id)=>{
        const carrito_nuevo=carrito.filter((p)=>p.id!==id);
        setCarrito(carrito_nuevo);
        localStorage.setItem('carrito', JSON.stringify(carrito_nuevo));
        console.log('Producto Eliminado');
    }
    const limpiarCarrito=()=>{
        const carrito_nuevo=[];
        setCarrito(carrito_nuevo);
        // localStorage.setItem('carrito', JSON.stringify(carrito_nuevo));
        localStorage.removeItem('carrito');
        console.log('Carrito Limpiado');
    }
    const precio_total=parseFloat(carrito.reduce((acc, p)=>acc+p.total, 0)).toFixed(2)
    
    return(
        <>
        <section className='cuerpo cart-items'>
            <div className='container d_flex'>
                {/* if hamro cart ma kunai pani objeto xaina bhane no diplay */}
                
                <div className='cart-details'>
                    {carrito.length===0 && <h1 className='no-items product'>No se agregaron productos en el Carrito</h1>}
                    {/* yasma hami le cart objeto lai display garaaxa */}
                    
                    {carrito.length>0 &&
                        <>
                        <button className='boton-espaciado boton-danger' onClick={()=>limpiarCarrito()}>
                            Vaciar Carrito <i className='fa-solid fa-shopping-cart'></i>
                        </button>
                        {
                            !objSesionHelper.estaAutenticado()?
                                (
                                    <Link to='/usuario'>
                                    <button className='boton-espaciado boton-primary'>
                                        Generar Pedido <i className='fa fa-shopping-bag'></i>
                                    </button>
                                    </Link>
                                ):
                                (
                                    <Link to='/orden'>
                                    <button className='boton-espaciado boton-primary'>
                                        Generar Pedido <i className='fa fa-shopping-bag'></i>
                                    </button>
                                    </Link>
                                )
                        }
                        </>
                    }
                    {carrito.map((objeto)=>{
//                        const productQty=(objeto.precio*objeto.cantidad).toFixed(2)
                        // {%if objeto.productoimagen_set.exists%}
                        console.log(objeto)
                        console.log(objeto.producto_imagenes)
                        // console.log(objeto.producto_imagenes.first)
                        return(
                            // {%if objeto.productoimagen_set.exists%}
                            <>
                            <div className='cart-list product d_flex' key={objeto.id}>
                                <div className='img'>
                                    {/* <img src={objeto.producto_imagenes__first.imagen.url} alt=''/>*/}
                                    <Link to={`/producto/${objeto.sku}`}><img src={objeto.producto_imagen?objeto.producto_imagen:predeterminada_producto} width={207} height={200} alt=''/></Link>
                                </div>
                                <div className='cart-details'>
                                    <p><Link to={`/producto/${objeto.sku}`}>{objeto.categoria_nombre}</Link></p>
                                    <h3><Link to={`/producto/${objeto.sku}`}>{objeto.nombre}</Link></h3>
                                    <p><Link to={`/marca/${objeto.marca_ceo}`}>{objeto.marca_nombre}</Link></p>
                                    <h4>
                                        ${objeto.precio} * {objeto.cantidad}
                                        {/* <span>${productQty}</span> */}
                                        <span>${objeto.total}</span>
                                    </h4>
                                </div>
                                <div className='cart-items-function'>
                                    <div className='removeCart'>
                                        <button className='removeCart' onClick={()=>eliminarCarrito(objeto.id)}>
                                            <i className='fa-solid fa-xmark'></i>
                                        </button>
                                    </div>
                                    {/* step: 5 
                                    product ko qty lai inc ra des garne
                                    */}
                                    <div className='cartControl d_flex'>
                                        <button className='incCart' onClick={()=>agregarCarrito(objeto)}>
                                            <i className='fa-solid fa-plus'></i>
                                        </button>
                                        <button className='desCart' onClick={()=>quitarCarrito(objeto)}>
                                            <i className='fa-solid fa-minus'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='cart-item-price'></div>
                            </div>
                            </>
                        )
                    })}
                </div>
                <div className='cart-total product'>
                    <h2>Resumen del Carrito</h2>
                    <div className=' d_flex'>
                        <h4>Precio Total :</h4>
                        <h3>${precio_total}</h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}