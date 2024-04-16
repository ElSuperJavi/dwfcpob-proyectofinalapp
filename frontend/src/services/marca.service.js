import {API_URL} from "../helpers/Environment";

export class MarcaService{
    constructor(){
    }
    get_all=async(id)=>{
        try{
            const respuesta=await fetch(`${API_URL}/marca`);
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
            const respuesta=await fetch(`${API_URL}/marca/${id}`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
}
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