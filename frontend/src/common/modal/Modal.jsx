import React from "react";
import "./Modal.css";

export const Modal=({isOpen, onClose, orderDetails})=>{
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Detalles de la Orden</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.producto}</td>
                                <td>{item.cantidad}</td>
                                <td>${item.precio}</td>
                                <td>${item.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}