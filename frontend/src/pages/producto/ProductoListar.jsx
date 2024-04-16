import {useEffect, useState} from "react";
import {ProductoService} from '../../services/producto.service'
import {CategoriaService} from '../../services/categoria.service'
import {MarcaService} from '../../services/marca.service'
import './ProductoListar.css'
import '../../components/layout/Layout.css'
import {Link} from "react-router-dom";
export const NuevoProducto=()=>{
    const objProducto=new ProductoService()
    const objCategoria=new CategoriaService()
    const objMarca=new MarcaService()
    const [listar, setListar]=useState([])
    const [listar_categoria, setListarCategoria]=useState([])
    const [listar_marca, setListarMarca]=useState([])
    const [listar_producto_filtrado, setListarProductoFiltrado]=useState([])

    const [filtroCategoria, setFiltroCategoria]=useState("");
    const [filtroMarca, setFiltroMarca]=useState("");
    const handleCategoriaChange=(categoria)=>{
        setFiltroCategoria(categoria);
        console.log(categoria)
    };
    const handleMarcaChange=(marca_id)=>{
        setFiltroMarca(marca_id);
        console.log(marca_id)
        //const productosFiltrados=filtroCategoria
        //    // ? listar.filter((p) =>p.categoria_datos.nivel===filtroCategoria.nivel)
        //    // ? listar.filter((p =>{p.categoria_datos.nivel===filtroCategoria.nivel_padre;console.log(listar)})
        //    ? listar.filter((p)=>{p.categoria_datos.categoria_datos.id===filtroCategoria.categor;console.log(listar)})
        //    : listar;
        //setListarProductoFiltrado(productosFiltrados)
        const productosFiltrados=filtroMarca
        // ? listar.filter((p) =>p.categoria_datos.nivel===filtroCategoria.nivel)
        // ? listar.filter((p =>{p.categoria_datos.nivel===filtroCategoria.nivel_padre;console.log(listar)})
        // ? listar.filter((p)=>{p.categoria_datos.categoria_datos.id===filtroCategoria.categor;console.log(listar)})
        // : listar;
        ? listar.filter((p)=>{p.marca_id===filtroMarca})
        : listar;
        setListarProductoFiltrado(productosFiltrados)
        console.log(listar_producto_filtrado)
    };

    // Carrito
    const [carrito, setCarrito]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [listar_carrito, setListarCarrito]=useState([])
    const agregarCarrito=(p)=>{
        const carrito=localStorage.getItem('carrito') || '[]'
        const carrito_parse=JSON.parse(carrito)
        const productos_en_el_carrito=carrito_parse.find((c)=>c.id===p.id)
        if(productos_en_el_carrito){
            const carrito_nuevo=carrito_parse.map((c)=>{
                if(c.id===p.id)
                return{
                    ...c,
                    cantidad: c.cantidad+1,
                    total: (parseFloat(c.total)+parseFloat(c.precio)).toFixed(2)
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
            total: (parseFloat(p.precio)).toFixed(2)
        }
        localStorage.setItem('carrito', JSON.stringify([...carrito_parse, producto_nuevo]))
        setCarrito(carrito_nuevo)
    }

    useEffect(()=>{
        objProducto.get_all().then((r)=>{
            if(r){
                setListar(r)
                console.log(r)
                console.log(r[0].producto_imagenes)
            }
        })
        objCategoria.get_by_nivel(1).then((r)=>{
            if(r){
                setListarCategoria(r)
                console.log(r)
            }
        })
        objMarca.get_all().then((r)=>{
            if(r){
                setListarMarca(r)
                console.log(r)
            }
        })
        console.log(listar)
        console.log(listar_producto_filtrado)



        // Carrito
        objProducto.get_all().then((r)=>{
        if(r){
            setListar(r)
        }
        })
    }, [filtroCategoria])


    const [mostrarCategorias, setMostrarCategorias]=useState(true);
    const [mostrarMarcas, setMostrarMarcas]=useState(true);
    const toggleCategoria=()=>{
        setMostrarCategorias(!mostrarCategorias);
    };
    const toggleMarca=() => {
        setMostrarMarcas(!mostrarMarcas);
    };
    const [filtro, setFiltro] = useState('nombre');
    const [mostrarOrden, setMostrarOrden] = useState(true);
    const [ordenSeleccionado, setOrdenSeleccionado] = useState("nombre");
    const handleOrdenSelect = (event) => {
        setOrdenSeleccionado(event.target.value);
    };

    return(
        <>
        <section className='cuerpo'>
            <div className="catalogo">
                <div className="filtros">
                    <p>Filtrar por:</p>
                    <div className="filtro">
                        <div onClick={toggleCategoria}>
                            Categoría {mostrarCategorias ? '▲' : '▼'}
                        </div>
                        {mostrarCategorias && (
                            <ul className="lista-filtro">
                                {listar_categoria.map((v_c, i_c)=>(
                                    <>
                                    <li key={i_c}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={filtroCategoria===v_c}
                                                onChange={()=>handleCategoriaChange(v_c)}
                                            />
                                            <span>{v_c.nombre}</span>
                                        </label>
                                    </li>
                                    {/* <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={filtroCategoria === "Herramientas"}
                                                onChange={() => handleCategoriaChange("Herramientas")}
                                            />
                                            <span>Herramientas</span>
                                        </label>
                                    </li> */}
                                    </>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="filtro">
                        <div onClick={toggleMarca}>
                            Marca {mostrarMarcas ? '▲' : '▼'}
                        </div>
                        {mostrarMarcas && (
                            <ul className="lista-filtro">
                            {listar_marca.map((v_m, i_m)=>(
                                <li key={i_m}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={filtroMarca===v_m.id}
                                            onChange={()=>handleMarcaChange(v_m.id)}
                                        />
                                        <span>{v_m.nombre}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>
                <div className="contenedor-productos">
                    <div className="filtro-orden">
                        {mostrarOrden && (
                            <>
                            <div className="selector-orden-container">
                                <p>
                                    Ordenar por {mostrarOrden ? "▲" : "▼"}
                                </p>
                                <select className="selector-orden" value={ordenSeleccionado} onChange={()=>handleOrdenSelect}>
                                    <option value="nombre">Nombre</option>
                                    <option value="precio">Precio</option>
                                    {/* Agrega más opciones de orden si es necesario */}
                                </select>
                            </div>
                            </>
                        )}
                    </div>
                    <div className="lista-productos">
                        {console.log(listar_producto_filtrado)}
                        {listar.map((v_p, i_p) => (
                        <div key={i_p} className="producto-card">
                            <div className="card-superior">
                                <img src={v_p.producto_imagenes[0]['imagen']} alt={v_p.nombre}/>
                            </div>
                            <div className="card-medio">
                                <h5>
                                    <Link to={`/producto/${v_p.sku}`}>{v_p.nombre}</Link>
                                </h5>
                            </div>
                            <div className="card-inferior">
                                <p>Precio: ${v_p.precio}</p>
                                <div className="estrellas">
                                    {/* {Array.from({ length: producto.estrellas }).map((_, index) => (
                                        <span key={index} role="img" aria-label="Estrella">
                                        ⭐️
                                        </span>
                                    ))} */}
                                    <span role="img" aria-label="Estrella">
                                        ⭐️⭐️⭐️⭐️⭐️
                                    </span>
                                </div>
                            </div>
                            <div className="boton-carrito-container">
                                <button className="boton-carrito" onClick={()=>agregarCarrito(v_p)}>
                                    <i className='fa fa-plus'></i>{" "}
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}