import {API_URL} from "../helpers/Environment";

export const get_all_p=async()=>{
    try{
        const respuesta=await fetch(`${API_URL}/producto`);
        if(!respuesta.ok){
        return null;
        }
        return respuesta.json();
    }catch(error){
        return null;
    }
    // async get_all(){
    //     const resultado=await models.Producto.findAll({include: 'categoria'})
    //     return resultado
    // }
    // async get_by_id(id){
    //     const resultado=await models.Producto.findByPk(id)
    //     return resultado
    // }
    // async post_create(datos){
    //     const resultado=await models.Producto.create(datos)
    //     return resultado
    // }
    // async put_by_id(id, datos){
    //     const objeto=await this.get_by_id(id)
    //     const resultado=await objeto.update(datos)
    //     return resultado
    // }
    // async delete_by_id(id){
    //     const objeto=await this.get_by_id(id)
    //     const resultado=await objeto.destroy()
    //     // const resultado=await models.Producto.delete(id)
    //     return resultado
    // }
}