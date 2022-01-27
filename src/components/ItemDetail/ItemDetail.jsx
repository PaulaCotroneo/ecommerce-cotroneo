import React from 'react';
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ({product}) => {

    function onAdd(cant){
        console.log(cant)
    }  
    
  return (
    <div className="detalles contenedor">
        
        <div key={product.id} className="detalle">
            <img className="detalle__imagen" src={product.imagen} alt={product.descripImagen}/> 
            <div className="detalle__informacion"> 
                <h4>{product.nombre}</h4>  
                <p>Fermín {product.categoria}</p> 
                <p>{product.descripcion}</p>                                                            
                <p className="detalle__precio">${product.precio}</p>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>   
            </div>

        </div>
    </div>
  

    )
};