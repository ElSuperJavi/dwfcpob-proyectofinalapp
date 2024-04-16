import {API_URL} from "../helpers/Environment";

export class ClienteService{
    constructor(){
    }
    // get_all=async(id)=>{
    //     try{
    //         const respuesta=await fetch(`${API_URL}/marca`);
    //         if(!respuesta.ok){
    //         return null;
    //         }
    //         return respuesta.json();
    //     }catch(error){
    //         return null;
    //     }
    // }
    // get_by_id=async(id)=>{
    //     try{
    //         const respuesta=await fetch(`${API_URL}/marca/${id}`);
    //         if(!respuesta.ok){
    //         return null;
    //         }
    //         return respuesta.json();
    //     }catch(error){
    //         return null;
    //     }
    // }
    post_by_cliente_registro=async(cliente)=>{
        try{
            cliente={
                usuario: {
                    username: cliente.usuario_username,
                    first_name: cliente.usuario_first_name,
                    last_name: cliente.usuario_last_name,
                    email: cliente.usuario_email,
                    password: cliente.usuario_password,
                },
                persona: {
                    nombre: cliente.usuario_username,
                    apellido_paterno: cliente.usuario_last_name,
                    apellido_materno: cliente.usuario_last_name_2,
                    genero: cliente.persona_genero,
                    fecha_nacimiento: cliente.persona_fecha_nacimiento
                },
                telefono: cliente.telefono,
                direccion: cliente.direccion
            }
            console.log(`Usuario Registrado: ${cliente}`)
            const respuesta=await fetch(`${API_URL}/cliente/`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(cliente)
            })
            if(!respuesta.ok){
                return null
            }
            const datos=await respuesta.json();
            return datos
        }catch(error){
            console.log(error)
            return 'Error: '+error
        }
    }
    post_by_cliente_login=async(usuario)=>{
        try{
            const respuesta=await fetch(`${API_URL}/usuario/login`, {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(usuario)
            })
            if(!respuesta.ok){
                return null
            }
            const datos=await respuesta.json();
            return datos
        }catch(error) {
            console.log(error)
            return 'Error: '+error
        }
    }
    get_by_usuario=async()=>{
      try{
        const token=localStorage.getItem('access_token');
        if(!token){
            return null
        }
        const payload=token.split(".")[1]
        const jsonPayload=JSON.parse(window.atob(payload))
        console.log(jsonPayload.user_id)
        const user_id=jsonPayload.user_id
        const respuesta=await fetch(`${API_URL}/usuario/${user_id}`, {
            method: "get"
        })
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
    get_by_cliente_user_id=async(id)=>{
        try{
            const respuesta=await fetch(`${API_URL}/cliente/usuario_id/${id}`, {method: "get"})
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