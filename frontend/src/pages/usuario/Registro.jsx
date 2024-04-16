import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ClienteService} from '../../services/cliente.service'
export const Registro=()=>{
    const objCliente=new ClienteService()
    const navigate=useNavigate()
    const [post_cliente, setPostCliente]=useState({
        // // Cliente
        // telefono: '',
        // direccion: '',
        // // Usuario
        // usuario: {
            // username:'',
            // password: '',
            // first_name: '',
            // last_name: '',
            // email: '',
        // },
        // // Persona
        // persona: {
            // nombre: '',
            // apellido_paterno: '',
            // apellido_materno: '',
            // genero: '',
            // fecha_nacimiento: ''
        // }
        // Cliente
        telefono: '',
        direccion: '',
        // Usuario
        usuario_username:'',
        usuario_first_name: '',
        usuario_last_name: '',
        usuario_last_name_2: '',
        usuario_email: '',
        usuario_password: '',
        // Persona
        // persona_nombre: '',
        // persona_apellido_paterno: '',
        // persona_apellido_materno: '',
        persona_genero: 'M',
        persona_fecha_nacimiento: '2000-01-01'
    })
    const handleInputChangePorCampo=(e)=>{
        setPostCliente({
            ...post_cliente,
            [e.target.name]: e.currentTarget.value
        })
        console.log(post_cliente)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        objCliente.post_by_cliente_registro(post_cliente).then((r)=>{
            console.log(post_cliente)
            if(!r){
                alert('Error al registrar')
                return
            }
            navigate('/usuario')
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Registrar</h1>
            <div className="formulario-container">
                <div className="formulario-column">
                    <label className='obligatorio' htmlFor="username">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        name='usuario_username'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu nombre de usuario"
                    />
                    <label className='obligatorio' htmlFor="password">Contraseña</label>
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
                    <label htmlFor="username">Nombre</label>
                    <input
                        type="text"
                        id="first_name"
                        name='usuario_first_name'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu nombre"
                    />
                    <label htmlFor="username">Apellido Pat.</label>
                    <input
                        type="text"
                        id="last_name"
                        name='usuario_last_name'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu apellido paterno"
                    />
                    <label htmlFor="username">Apellido Mat.</label>
                    <input
                        type="text"
                        id="last_name_2"
                        name='usuario_last_name_2'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu apellido materno"
                    />
                    <label htmlFor="gender">Género</label>
                    <select
                        id="gender"
                        name="persona_genero"
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
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
                    />
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name='usuario_email'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu correo electrónico"
                    />
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name='telefono'
                        className="formulario-input"
                        onChange={handleInputChangePorCampo}
                        placeholder="Ingresa tu número de teléfono"
                    />
                    <label htmlFor="address">Dirección</label>
                    <textarea
                        id="direccion"
                        className="formulario-input"
                        name='direccion'
                        placeholder="Ingresa tu dirección"
                        onChange={handleInputChangePorCampo}
                        rows="4"
                    ></textarea>
                </div>
            </div>
            <button className="formulario-button boton-espaciado boton-primary">
                Crear
            </button>
        </form>
        </>
    )
}