import {API_URL} from "../helpers/environment";

export const getProductsService=async()=>{
    try{
        const respuesta=await fetch(`${API_URL}/producto`);
        if(!respuesta.ok){
        return null;
        }
        return respuesta.json();
    }catch(error){
        return null;
    }
}