import {useEffect, useState} from "react"
import {Link, useParams} from 'react-router-dom';
import {ClienteService} from '../../services/cliente.service'
import {OrdenService} from '../../services/orden.service'
import {OrdenDetalleComponente} from './OrdenDetalleComponente'
import '../../components/layout/Layout.css'
export const OrdenDetalle=()=>{
    const {codigo}=useParams()
    console.log('codigo', codigo)
    const objCliente=new ClienteService()
    const objOrden=new OrdenService()
    // Cliente Array
    const [cliente, setCliente]=useState([])
    // Orden
    const [orden, setOrden]=useState([])
    // OrdenDetalle
    const [orden_detalle, setOrdenDetalle]=useState([])
    // buscarOrden(cliente.id)
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
    const buscarOrden=(client_id)=>{
        objOrden.get_by_orden_cliente_id(client_id).then((r3)=>{
            if(r3){
                // Orden
                console.log(r3)
                setOrden(r3)
                console.log(orden)
                buscarOrdenDetalle(r3)
            }
        })
    }
    const buscarOrdenDetalle=(_orden)=>{
        const objetoEncontrado=_orden.find((objeto)=>objeto.codigo===codigo);
        console.log(objetoEncontrado)
        setOrdenDetalle(objetoEncontrado.orden_detalles)
        console.log(orden_detalle)
    }
    return(
        <>
        <section className='cuerpo'>
            <div className="ordenes-contenedor">
                <div class="container">
                    <div class="breadcrumb">
                        <a href='/'>Inicio</a> &gt; <Link to='/ordenes'>Historial de Órdenes</Link> &gt; <span>Orden</span>
                    </div>
                    
                    <h1><i className='fa fa-info-circle'></i> Orden: {codigo}</h1>
                    {console.log(orden_detalle)}
                    <OrdenDetalleComponente orden_detalle={orden_detalle}/>
                </div>
            </div>
        </section>
        </>
    )
}