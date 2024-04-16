import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {SesionHelper} from '../../helpers/Auth'
import {ClienteService} from '../../services/cliente.service'
import {OrdenService} from '../../services/orden.service'
import '../../components/layout/Layout.css'
import '../orden/Orden.css'
export const Orden=()=>{
  const objSesionHelper=new SesionHelper()
  const objCliente=new ClienteService()
  const objOrden=new OrdenService()
  // Carrito
  const [carrito, setCarrito]=useState(JSON.parse(localStorage.getItem('carrito')) || [])
  const [orden, setOrden]=useState({})
  // Cliente
  const [post_cliente_id, setPostClienteId]=useState(0)
  const [telefono, setTelefono]=useState('')
  const [direccion, setDireccion]=useState('')
  // Usuario
  const [usuario, setUsuario]=useState('')
  const [nombre, setNombre]=useState('')
  const [correo, setCorreo]=useState('')
  // Persona
  const [apellido_paterno, setApellidoPaterno]=useState('')
  const [apellido_materno, setApellidoMaterno]=useState('')
  const [apellidos, setApellidos]=useState('')
  const [genero, setGenero]=useState('')
  const [fecha_nacimiento, setFechaNacimiento]=useState('')
  const precio_total=parseFloat(carrito.reduce((acc, p)=>acc+p.total, 0)).toFixed(2)
  if(!objSesionHelper.estaAutenticado()){
    return <Navigate to="/usuario"/>
  }
  objCliente.get_by_usuario().then((r)=>{
    if(r){
      console.log(r)
      setUsuario(r.username)
      setNombre(r.first_name)
      setCorreo(r.email)
      objCliente.get_by_cliente_user_id(r.id).then((r)=>{
          console.log(r)
          // Cliente
          setPostClienteId(r.id);
          setDireccion(r.direccion);
          setTelefono(r.telefono);
          // Persona
          setApellidoPaterno(r.persona.apellido_paterno),
          setApellidoMaterno(r.persona.apellido_materno),
          setApellidos(r.persona.apellido_paterno+' '+r.persona.apellido_materno),
          setGenero(r.persona.genero),
          setFechaNacimiento(r.persona.fecha_nacimiento)
      })
    }
  })
  const initialOptions={
    clientId: '',
    currency: 'USD',
    intent: 'capture'
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    objOrden.post_orden(post_cliente_id).then((r)=>{
      console.log(post_cliente_id)
      if(!r){
        alert('Error al generar la orden')
        return
      }
      console.log('Orden registrada: ', r)
      setOrden(r)
      alert("Pedido Registrado!")
    })
  };
  
  const limpiarCarrito=()=>{
    const carrito_nuevo=[];
    setCarrito(carrito_nuevo);
    localStorage.removeItem('carrito');
    console.log('Carrito Limpiado');
};
  return(
    <>
    {/* <section className="cuerpo">
        <h1>Confirmar Pedido</h1>
        <h2>Datos del Usuario</h2>
        <form>
            Nombre : <input type="text" name="nombre" value={nombre}/>
            Apellidos: <input type="text" name="apellidos" value={apellidos}/>
            Email :<input type="text" name="correo" value={correo}/>
        </form>
        <h2>Datos del Cliente</h2>
        <form>
            Dirección : <input type="text" name="direccion" value={direccion}/>
            Telefono : <input type="text" name="telefono" value={telefono}/>
        </form>
    </section> */}


    <section className="cuerpo">
      <div className="orden-contenedor">
        <div className="orden-container">
          <div className="orden-title">Confirmación de Pedido</div>
          <div className="orden-message">
            ¡Gracias por tu pedido! Tus artículos serán enviados pronto.
            <hr/>
          </div>
          <div className="formulario-container">
            <form onSubmit={handleSubmit}>
              <div className="formulario-container">
                {/* <div className="orden-details"> */}
                  <div className="formulario-column">
                    {/* <div className="orden-list"> */}
                      <h3><i className="fa fa-info-circle"></i> Datos</h3>
                      <h4><i className="fa fa-user-tag"></i>Usuario</h4>
                      <ul>
                        <li><strong>Usuario: </strong>{usuario}</li>
                        <li><strong>Correo: </strong>{correo}</li>
                      </ul>
                      <br/>
                      <h4><i className="fa fa-users"></i>Cliente</h4>
                      <ul>
                        <li><strong>Nombre Completo: </strong>{nombre} {apellidos}</li>
                        <li><strong>Dirección: </strong>{direccion}</li>
                        <li><strong>Teléfono: </strong>{telefono}</li>
                      </ul>
                    {/* </div> */}
                    <hr/>
                  </div>
                  <div className="formulario-column">
                    {/* <div className="orden-list"> */}
                      <h3><i className="fa fa-tag"></i> Detalle del Pedido</h3>
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {console.log(carrito)}
                          {carrito.length>0?
                            (
                              carrito.map((v_c, v_i)=>(
                                <tr key={v_i}>
                                  {/* <th scope="row">{v_i+1}</th> */}
                                  <td>{v_c.nombre}</td>
                                  <td>${v_c.precio}</td>
                                  <td>{v_c.cantidad}u</td>
                                  <td>${v_c.total}</td>
                                </tr>
                              )
                            )
                            ):
                            (
                              <tr>
                                <td colspan={4}>No se agregaron productos en el Carrito</td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                      <hr/>
                      <strong>Precio Total: </strong>${precio_total}
                      <hr/>
                      <div className="boton-centrado">
                        <Link to='/orden/gracias'>
                          <button className="boton-normal boton-primary" onClick={limpiarCarrito}>Confirmar</button>
                        </Link>
                      </div>
                    {/* </div> */}
                  </div>
                {/* </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}