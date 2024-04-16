import {useNavigate} from 'react-router-dom'
export class SesionHelper{
    // navigate=useNavigate()
    constructor(){
        // this.navigate=navigate
    }
    // navegar=()=>{
    //     return useNavigate();
    // }
    estaAutenticado=()=>{
        const token=localStorage.getItem("access_token") || null
        if(!token){
            return false
        }
        const [, payload]=token.split(".")
        const data= JSON.parse(atob(payload))
        const exp=data.exp;
        // if(exp<Date.now()/1000){
        if(exp<Date.now()/10000){
            return false
        }
        return true
    }
    cerrarSesion=()=>{
        localStorage.removeItem("access_token")
        // useNavigate()('/')
        // this.navegar('/')
        return true
    }
}