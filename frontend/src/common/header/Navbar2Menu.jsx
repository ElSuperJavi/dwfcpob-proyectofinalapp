
import React, {useEffect, useState} from "react"
// import {Link} from "react-router-dom"
import {Helmet} from 'react-helmet'
// import '../../assets/css/navbar/estilo.css'
import {nombre_tienda} from '../../components/constants/Global'
import {CategoriaService} from "../../services/categoria.service"

export const Navbar2Menu=()=>{
    const objCategoria=new CategoriaService()
    const [categorias, setCategorias]=useState([])
    const [categorias2, setCategorias2]=useState([])
    const [cancat1, setCancat1] = useState(0);
    const [cancat2, setCancat2] = useState(0);
    const [cancat3, setCancat3] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = (e) => {
        setIsHovered(e);
        console.log(`e=>${e}`)
      {categorias.map((v, i)=>{
        if(v.nivel===1){
            setCancat1(i+1)
        }
      })}
      {categorias.map((v, i)=>{
        if(v.nivel===2){
            setCancat2(i+1)
        }
      })}
      {categorias.map((v, i)=>{
        if(v.nivel===3){
            setCancat3(i+1)
        }
      })}
            //   setCancat2(cancat2-cancat1)
      };
     
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    const handleMouseMove=(event)=>{
        // console.log(JSON.parse(event.target.dataset.info))
        console.log(event.target.dataset.info)
    }
    useEffect(()=>{
        objCategoria.get_all().then((datos)=>{
            if(datos){
                setCategorias(datos);
            }
        });
    }, []);
    return(
        <>
        <nav className="menu">
            <div className="mobile-menu-head">
                <div className="go-back"><i className="fa fa-angle-left"></i></div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
            </div>
            <ul className="menu-main">
                <li className="menu-item-has-children">
                    <a href="#">Compra por Categoría <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                        <ul>
                            {console.log(categorias)}
                            {categorias.map((v, i)=>{
                            console.log(`${cancat1} ${cancat2} ${cancat3}`)
                            if(v.nivel===1)
                            // {let valor=0}
                            return(
                                <>
                                {/* <li><a href="#">{v.nombre}</a></li> */}
                                {/* // <div className='box f_flex' key={i}>
                                // <img src={v.imagen} alt=''/>
                                // <span>{v.nombre}</span>
                                // </div> */}
                                <li className="menu-item-has-children" key={v.id}/* data-info={v.id}*/
                                    onMouseEnter={()=>handleMouseEnter(v.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href="#"><img src={v.imagen} width={'auto'} height={20}/>{v.nombre} <i className="fas fa-angle-down"></i></a>
                                    {/* {categorias.some((c)=>{c.nivel_padre===1 && c.id===v.id})
                                        ?
                                        <a href="#">{v.nombre}
                                            x<i className="fas fa-angle-down"></i>
                                        </a>
                                        :
                                        <a href="#">{v.nombre}
                                        </a>
                                    } */}
                                    <div className="sub-menu mega-menu mega-menu-column-4">
                                    {categorias.map((v2, i2)=>{
                                            // console.log(`Categorias Nivel2 => ${v2.nombre} | ID => ${isHovered}`)
                                            if(v2.nivel===2 && v2.nivel_padre===isHovered && v.id===isHovered){
                                            // if(v.nivel===2 && v.nivel_padre===1){
                                                console.log(`Categorias Nivel2 => ${v2.nombre} | ID => ${isHovered}`)
                                                // {let valor=0}
                                                // valor=4
                                                return(
                                                    <>
                                                        <div className="list-item" key={v2.id}>
                                                            {/* <h4 className="title">{cancat1} | {i} {i2} {i2+1} {v2.nombre} {v2.id} {v2.nivel} U {v2.nivel_padre} {i2-i+1-v.id}</h4> */}
                                                            <h4 className="title">{v2.nombre}</h4>
                                                            {/* <h4>{cancat1} | {i} {i2} {i2+1} {v2.nombre} {v2.id} {v2.nivel} U {v2.nivel_padre} {i2-i+1-v.id}</h4> */}
                                                            <ul>
                                                                {categorias.map((v3, i3)=>{
                                                                // if(v3.nivel===3 && v3.nivel_padre===-i3+i2+i && v.id===isHovered)
                                                                // if(v3.nivel===3 && v2.id===v3.id-(cancat2+cancat1) && v.id===isHovered)
                                                                // if(/*i3+1>=cancat2 && */i3+1>v2.id/* && i3+1<v3.id*/)
                                                                if(v3.nivel===3 && v3.nivel_padre==i2-cancat1+1)
                                                                return(
                                                                    <>
                                                                    <li><a href={v3.ceo}>{v3.nombre}</a></li>
                                                                    {/* <li>
                                                                        <a href="#">{v3.id} | {i3+1} | {i+i2+i3+1} | {i} {i2} {i3} {i3+1} {v3.id} {v3.nombre} {v3.nivel} {v3.nivel_padre} | {v2.nivel} {v2.nivel_padre}</a>
                                                                    </li>
                                                                    <li>
                                                                        <li><a href="#">{v3.nombre}</a></li>
                                                                    </li> */}
                                                                    {/* <li>
                                                                        {categorias.map((v4, i4)=>{
                                                                        if(v4.id==v3.id)
                                                                        return(
                                                                            <>
                                                                            <li><a href="#">y{v4.nombre}</a></li>
                                                                            </>
                                                                        )})}
                                                                    </li> */}
                                                                    </>
                                                                )})}
                                                            </ul>
                                                            {/* <h4 className="title">Beauty</h4>
                                                            <ul>
                                                                <li><a href="#">Product List</a></li>
                                                                <li><a href="#">Product List</a></li>
                                                                <li><a href="#">Product List</a></li>
                                                            </ul> */}
                                                        </div>
                                                    </>
                                                )
                                            }
                                        return(
                                        <>
                                        </>
                                    )})}
                                    </div>
                                </li>
                                </>
                            )
                            })}
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/catalogo">Catálogo</a>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">New <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item text-center">
                            <a href="#">
                                <img src="img/p1.jpg" alt="new Product" />
                                <h4 className="title">Product 1</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="#">
                                <img src="img/p2.jpg" alt="new Product" />
                                <h4 className="title">Product 2</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="#">
                                <img src="img/p3.jpg" alt="new Product" />
                                <h4 className="title">Product 3</h4>
                            </a>
                        </div>
                        <div className="list-item text-center">
                            <a href="#">
                                <img src="img/p4.jpg" alt="new Product" />
                                <h4 className="title">Product 4</h4>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Shop <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                            <h4 className="title">Men's Fashion</h4>
                            <ul>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                            </ul>
                            <h4 className="title">Beauty</h4>
                            <ul>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                            </ul>
                        </div>
                        <div className="list-item">
                            <h4 className="title">Women's Fashion</h4>
                            <ul>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                            </ul>
                            <h4 className="title">Furniture</h4>
                            <ul>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                            </ul>
                        </div>
                        <div className="list-item">
                            <h4 className="title">Home, Kitchen</h4>
                            <ul>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                                <li><a href="#">Product List</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Blog <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                        <ul>
                            <li><a href="#">Standard Layout</a></li>
                            <li><a href="#">Grid Layout</a></li>
                            <li><a href="#">single Post Layout</a></li>
                        </ul>
                    </div>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Marcas <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                        <ul>
                            <li><a href="/marcas">Ver todas las marcas</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Mis Órdenes <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                        <ul>
                            <li><a href="/ordenes">Ver Historial Completo</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        </>
    )
}