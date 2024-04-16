import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ClienteService} from '../../services/cliente.service'
export const Login=()=>{
    const objCliente=new ClienteService()
    const navigate=useNavigate()
    const [post_usuario, setPostUsuario]=useState({
        username:'juan.perez',
        password: ''
    })
    const handleInputChangePorCampo=(e)=>{
        setPostUsuario({
            ...post_usuario,
            [e.target.name]: e.currentTarget.value
        })
        console.log(post_usuario)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        objCliente.post_by_cliente_login(post_usuario).then((r)=>{
            console.log(post_usuario)
            if(!r){
                alert('Usuario o contraseña incorrectos')
                return
            }
            localStorage.setItem("access_token", r.access);
            localStorage.setItem("refresh_token", r.refresh);
            navigate('/')
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <label htmlFor="username">Nombre de usuario</label>
            <input
                type="text"
                id="username"
                className="formulario-input"
                name="username"
                onChange={handleInputChangePorCampo}
                placeholder="Ingresa tu nombre de usuario"
            />
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                className="formulario-input"
                name="password"
                onChange={handleInputChangePorCampo}
                placeholder="Ingresa tu contraseña"
            />
            <button className="formulario-button boton-espaciado boton-primary">
                Entrar
            </button>
        </form>
        </>
    )
}