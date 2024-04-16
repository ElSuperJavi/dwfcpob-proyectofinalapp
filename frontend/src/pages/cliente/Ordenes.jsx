import {useEffect, useState} from "react"
import {Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {SesionHelper} from '../../helpers/Auth'
import {ClienteService} from '../../services/cliente.service'
import {OrdenService} from '../../services/orden.service'
import {Modal} from '../../common/modal/Modal'
import '../../components/layout/Layout.css'
import {Link} from "react-router-dom";
export const Ordenes=()=>{
    const objSesionHelper=new SesionHelper()
    const objCliente=new ClienteService()
    const objOrden=new OrdenService()
    const navigate=useNavigate()
    // Cliente Array
    const [cliente, setCliente]=useState([])
    // Orden
    const [orden, setOrden]=useState([])
    if(!objSesionHelper.estaAutenticado()){
    return <Navigate to="/usuario"/>
    }
    const buscarOrden=(client_id)=>{
        objOrden.get_by_orden_cliente_id(client_id).then((r3)=>{
            if(r3){
                // Orden
                console.log(r3)
                setOrden(r3)
                console.log(orden)
            }
        })
    }
    useEffect(()=>{
        objCliente.get_by_usuario().then((r)=>{
            if(r){
                console.log(r)
                objCliente.get_by_cliente_user_id(r.id).then((r2)=>{
                    console.log(r2)
                    setCliente(r2)
                    // Orden
                    buscarOrden(r2.id)
                })
            }
        })
    }, [])
    return(
        <>
        <section className='cuerpo'>
            <div className="ordenes-contenedor">
                <div class="container">
                    <div class="breadcrumb">
                        <a href="/">Inicio</a> &gt; <span>Historial de Órdenes</span>
                    </div>
                    <h1><i className='fa fa-history'></i>Historial de Órdenes</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nro</th>
                                <th>Código</th>
                                <th>Estado</th>
                                <th>Precio Total</th>
                                <th>Descuento</th>
                                <th>Fecha Registro</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(orden)}
                            {orden.map((v_o, i_o)=>(
                                <>
                                <tr key={i_o}>
                                    <td>{i_o+1}</td>
                                    <td>{v_o.codigo}</td>
                                    <td>{v_o.estado=='1'?'Pendiente':'Completado'}</td>
                                    <td>${v_o.precio_total}</td>
                                    <td>${v_o.descuento}</td>
                                    <td>{v_o.fecha_registro}</td>
                                    <td>
                                        <Link to={`/orden/${v_o.codigo}`}>Ver</Link>
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        </>
    )
}