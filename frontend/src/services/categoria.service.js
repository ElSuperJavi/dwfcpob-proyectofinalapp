// import {API_URL} from "../helpers/Environment";

// export const get_all_c=async()=>{
//     try{
//         const respuesta=await fetch(`${API_URL}/categoria`);
//         if(!respuesta.ok){
//         return null;
//         }
//         return respuesta.json();
//     }catch(error){
//         return null;
//     }
// }


import {API_URL} from "../helpers/Environment";

export class CategoriaService{
    constructor(){
    }
    get_all=async()=>{
        try{
            const respuesta=await fetch(`${API_URL}/categoria`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
    get_by_id=async(id)=>{
        try{
            const respuesta=await fetch(`${API_URL}/categoria/${id}`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
    get_by_nivel=async(nivel)=>{
        try{
            const respuesta=await fetch(`${API_URL}/categoria/nivel/${nivel}`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
}