import './Ordenes.css'
import '../../components/layout/Layout.css'
import {Link} from "react-router-dom";
export const OrdenDetalleComponente=({orden_detalle})=>{
    console.log(orden_detalle)
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Nro</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {orden_detalle.map((v_o, i_o)=>(
                    <>
                    <tr key={v_o.id}>
                        <td>{i_o+1}</td>
                        <td>{v_o.producto.nombre}</td>
                        <td>{v_o.cantidad}u</td>
                        <td>${v_o.precio}</td>
                        <td>${v_o.subtotal}</td>
                    </tr>
                    </>
                ))}
            </tbody>
        </table>
        </>
    )
}