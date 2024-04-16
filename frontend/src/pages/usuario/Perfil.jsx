import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {SesionHelper} from '../../helpers/Auth'
import {ClienteService} from '../../services/cliente.service'
// import './Usuario.css'; // Asegúrate de importar tu archivo CSS
import './Perfil.css' // Asegúrate de importar tu archivo CSS
import '../../components/layout/Layout.css' // Asegúrate de importar tu archivo CSS

export const Perfil=()=>{
    // const objCliente=new ClienteService()
    //   const objMarca=new MarcaService()
//   const [marca, setMarca]=useState([])
//   const [marcaimagen, setMarcaImagen]=useState([])
//   const [marcacategoriaimagen, setMarcaCategoriaImagen]=useState([])

  
    const objSesionHelper=new SesionHelper()
    const objCliente=new ClienteService()
    const navigate=useNavigate()
    // Cliente
    const [telefono, setTelefono]=useState('')
    const [direccion, setDireccion]=useState('')
    // Usuario
    const [nombre, setNombre]=useState('')
    const [correo, setCorreo]=useState('')
    // Persona
    const [apellido_paterno, setApellidoPaterno]=useState('')
    const [apellido_materno, setApellidoMaterno]=useState('')
    const [apellidos, setApellidos]=useState('')
    const [genero, setGenero]=useState('')
    const [fecha_nacimiento, setFechaNacimiento]=useState('')
    if(!objSesionHelper.estaAutenticado()){
    return <Navigate to="/usuario"/>
    }
    objCliente.get_by_usuario().then((r)=>{
        if(r){
            // Usuario
            console.log(r)
            setNombre(r.first_name)
            setCorreo(r.email)
            objCliente.get_by_cliente_user_id(r.id).then((r)=>{
                console.log(r)
                // Cliente
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
    const cerrarSesion=async(e)=>{
        e.preventDefault()
        if(objSesionHelper.cerrarSesion()){
            navigate('/')
        }
    }
    const handleInputChangePorCampo=(e)=>{
        setPostCliente({
            ...post_cliente,
            [e.target.name]: e.currentTarget.value
        })
        console.log(post_cliente)
    }
    const handleSubmit=async(e)=>{
        // e.preventDefault()
        // objCliente.post_by_cliente_registro(post_cliente).then((r)=>{
        //     console.log(post_cliente)
        //     if(!r){
        //         alert('Error al retornar datos')
        //         return
        //     }
        //     navigate('/usuario')
        // })
    }
    return(
        <>
        {/* <section className="cuerpo">
            <div className="user-profile">
            <h2>Perfil de Usuario</h2>
            <div className="user-info">
                <p><strong>Nombre:</strong> {nombre} {apellido_paterno} {apellido_materno}</p>
                <p><strong>Correo Electrónico:</strong> {correo}</p>
                <p><strong>Teléfono:</strong> {telefono}</p>
                <p><strong>Dirección:</strong> {direccion}</p>
                <p><strong>Género:</strong> {genero==='M'?'Masculino':'Femenino'}</p>
                <p><strong>Fecha de Nacimiento:</strong>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={fecha_nacimiento}></input></p>
            </div>
            <button className="auth-button boton-primary" onClick={cerrarSesion}>
                Cerrar Sesión
            </button>
            </div>
        </section> */}
        <section className="cuerpo">
            <div className="perfil-contenedor">
                <div className="auth-tabs">
                <div
                    className={`tab active`}
                    onClick={()=>handleTabChange('register')}
                >
                    {nombre} {apellidos}
                </div>
                </div>
                <div className="formulario-contenido">
                    <form onSubmit={handleSubmit}>
                        <h1><i class="fa fa-user"></i> Mi Perfil</h1>
                        <div className="formulario-container">
                            <div className="formulario-column">
                                <h2>Mi Usuario</h2>
                                <label htmlFor="username">Nombre de usuario</label>
                                <input
                                    type="text"
                                    id="username"
                                    name='usuario_username'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu nombre de usuario"
                                    value={nombre}
                                />
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    name='usuario_password'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>
                            <div className="formulario-column">
                                <h2>Datos Personales</h2>
                                <label htmlFor="username">Nombre</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name='usuario_first_name'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu nombre"
                                    value={nombre}
                                />
                                <label htmlFor="username">Apellido Pat.</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name='usuario_last_name'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu apellido paterno"
                                    value={apellido_paterno}
                                />
                                <label htmlFor="username">Apellido Mat.</label>
                                <input
                                    type="text"
                                    id="last_name_2"
                                    name='usuario_last_name_2'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu apellido materno"
                                    value={apellido_materno}
                                />
                                <label htmlFor="gender">Género</label>
                                <select
                                    id="gender"
                                    name="persona_genero"
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    value={genero}
                                >
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                    <option value="O">Otro</option>
                                </select>
                                <label htmlFor="birthdate">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    id="birthdate"
                                    name="persona_fecha_nacimiento"
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    value={fecha_nacimiento}
                                />
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='usuario_email'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu correo electrónico"
                                    value={correo}
                                />
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name='telefono'
                                    className="formulario-input"
                                    onChange={handleInputChangePorCampo}
                                    placeholder="Ingresa tu número de teléfono"
                                    value={telefono}
                                />
                                <label htmlFor="address">Dirección</label>
                                <textarea
                                    id="direccion"
                                    className="formulario-input"
                                    name='direccion'
                                    placeholder="Ingresa tu dirección"
                                    onChange={handleInputChangePorCampo}
                                    rows="4"
                                    value={direccion}
                                ></textarea>
                            </div>
                            <button className="auth-button boton-espaciado boton-primary">
                                Guardar
                            </button>
                            <button className="boton-espaciado boton-danger" onClick={cerrarSesion}>
                                Cerrar Sesión
                            </button>
                        </div>
                    </form>
                    {/* <div className="enlace">
                        <Link onClick={()=>handleTabChange('login')}>
                            Cerrar Sesión <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    )
}