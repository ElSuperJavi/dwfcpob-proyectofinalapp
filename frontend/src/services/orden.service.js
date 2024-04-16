import {API_URL} from "../helpers/Environment";

export class OrdenService{
    constructor(){
    }
    post_orden=async(cliente_id)=>{
        try{
            const carrito=JSON.parse(localStorage.getItem('carrito'))
            console.log('Carrito:', carrito)
            const orden_detalles=carrito.map(v_c=>({
                precio: v_c.precio,
                cantidad: v_c.cantidad,
                subtotal: v_c.total,
                producto: v_c.id
            }))
            const precio_total=parseFloat(carrito.reduce((acc, p)=>acc+p.total, 0)).toFixed(2)
            const orden={
                // codigo: 'PED'+cliente_id,
                estado: 1,
                precio_total: precio_total,
                descuento: 0,
                cliente: cliente_id,
                orden_detalles: orden_detalles
            }
            console.log('Orden:', orden)
            const respuesta=await fetch(`${API_URL}/orden`, {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(orden)
            })
            if(!respuesta.ok){
                return null
            }
            const datos=await respuesta.json()
            return datos
        }catch(error){
            return 'Error: '+error
        }
    }
    get_by_orden_cliente_id=async(cliente_id)=>{
        try{
            const respuesta=await fetch(`${API_URL}/orden/cliente_id/${cliente_id}`, {method: 'get'})
            if(!respuesta.ok){
                return null
            }
            const datos=await respuesta.json()
            return datos
        }catch(error){
            console.log(error)
            return 'Error: '+error
        }
    }
}