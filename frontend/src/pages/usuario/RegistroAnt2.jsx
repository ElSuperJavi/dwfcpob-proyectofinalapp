import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ClienteService} from '../../services/cliente.service'
export const Registro=()=>{
    const objCliente=new ClienteService()
    const navigate=useNavigate()
    const [post_cliente, setPostCliente]=useState({
        // Cliente
        telefono: '',
        direccion: '',
        // // Usuario
        // usuario: {
        //     username:'',
        //     password: '',
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        // },
        // // Persona
        // persona: {
        //     nombre: '',
        //     apellido_paterno: '',
        //     apellido_materno: '',
        //     genero: '',
        //     fecha_nacimiento: ''
        // }
        // Usuario
        usuario: {
            username:'',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
        },
        // Persona
        persona: {
            nombre: '',
            apellido_paterno: '',
            apellido_materno: '',
            genero: '',
            fecha_nacimiento: ''
        }
    })
    const handleInputChangePorCampo=(e)=>{
        setPostCliente({
            ...post_cliente,
            [e.target.name]: e.currentTarget.value
        })
        console.log(post_cliente)
    }
    const handleInputChangePorCampos_usuario_nombreusuario=(e)=>{
        const {name, value}=e.target;
        setPostCliente(/*(post_cliente)=>(*/{
            ...post_cliente,
            /*[name]: value,*/
            usuario: {
                ...post_cliente.usuario,
                username: value
            },
            persona: {
                ...post_cliente.persona,
                nombre: value
            },
        }/*)*/);
        console.log(post_cliente);
    };
    const handleInputChangePorCampos_usuario_nombre=(e)=>{
        const {name, value}=e.target;
        setPostCliente({
            ...post_cliente,
            usuario: {
                ...post_cliente.usuario,
                username: value
            },
            persona: {
                ...post_cliente.persona,
                nombre: value
            },
        });
    };
    const handleInputChangePorCampo_usuario_apellidos=(e)=>{
        const {name, value}=e.target;
        setPostCliente({
            ...post_cliente,
            usuario: {
                ...post_cliente.usuario,
                last_name: value
            },
            persona: {
                ...post_cliente.persona,
                apellido_paterno: `${post_cliente.usuario.first_name}`
            },
        });
    };
    const handleSubmit=async(e)=>{
        objCliente.post_by_cliente(cliente).then((r)=>{
            if(!r){
                alert('Error al retornar datos')
                return
            }
            navigate('login')
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Registrar</h1>
            <label htmlFor="username">Nombre de usuario</label>
            <input
                type="text"
                id="username"
                // name='usuario.username'
                className="auth-input"
                onChange={handleInputChangePorCampos_usuario_nombreusuario}
                placeholder="Ingresa tu nombre de usuario"
            />
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name='password'
                className="auth-input"
                onChange={handleInputChangePorCampo}
                placeholder="Ingresa tu contraseña"
            />
            <label htmlFor="username">Nombre</label>
            <input
                type="text"
                id="first_name"
                // name='usuario.first_name'
                className="auth-input"
                onChange={handleInputChangePorCampos_usuario_nombre}
                placeholder="Ingresa tu nombre"
            />
            <label htmlFor="username">Apellido Pat.</label>
            <input
                type="text"
                id="last_name"
                name='last_name'
                className="auth-input"
                onChange={()=>(handleInputChangePorCampo, handleInputChangePorCampo_usuario_apellidos)}
                placeholder="Ingresa tu apellido paterno"
            />
            <label htmlFor="username">Apellido Mat.</label>
            <input
                type="text"
                id="last_name"
                name='last_name'
                className="auth-input"
                onChange={()=>(handleInputChangePorCampo, handleInputChangePorCampo_usuario_apellidos)}
                placeholder="Ingresa tu apellido materno"
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
                type="email"
                id="email"
                name='email'
                className="auth-input"
                onChange={handleInputChangePorCampo}
                placeholder="Ingresa tu correo electrónico"
            />
            <label htmlFor="phone">Teléfono</label>
            <input
                type="tel"
                id="telefono"
                name='telefono'
                className="auth-input"
                onChange={handleInputChangePorCampo}
                placeholder="Ingresa tu número de teléfono"
            />
            <label htmlFor="address">Dirección</label>
            <textarea
                id="direccion"
                className="auth-input"
                name='auth-input'
                placeholder="Ingresa tu dirección"
                onChange={handleInputChangePorCampo}
                rows="4" // Ajusta la cantidad de filas según tus necesidades
            ></textarea>
            {/* <button type="submit" className="auth-button boton-primary">
                Crear
            </button> */}
        </form>
        </>
    )
}