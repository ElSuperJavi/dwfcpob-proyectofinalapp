import {API_URL} from "../helpers/Environment";

export class ProductoService{
    constructor(){
    }
    get_all=async()=>{
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
    // get_by_id=async(id)=>{
    //     try{
    //         const respuesta=await fetch(`${API_URL}/producto/${id}`);
    //         if(!respuesta.ok){
    //         return null;
    //         }
    //         return respuesta.json();
    //     }catch(error){
    //         return null;
    //     }
    // }
    get_by_sku=async(sku)=>{
        try{
            const respuesta=await fetch(`${API_URL}/producto/sku/${sku}`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
    get_by_nombre=async(nombre)=>{
        try{
            const respuesta=await fetch(`${API_URL}/producto/buscar/${nombre}`);
            if(!respuesta.ok){
            return null;
            }
            return respuesta.json();
        }catch(error){
            return null;
        }
    }
}