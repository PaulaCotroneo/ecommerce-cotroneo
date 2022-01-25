import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

export const Item = ( {id, nombre, imagen, descripImagen, categoria, precio, oferta, stock }) => {

    function onAdd(cant){
        console.log(cant)
    }  
    
  return (
    <div className="productos contenedor">
        <div key={id} className="producto">
            <img className="producto__imagen" src={imagen} alt={descripImagen}/> 
            <div className="producto__informacion"> 
                <h4>{nombre}</h4>  
                <p>Fermín {categoria}</p>                                                            
                <div className="producto__precio">  
                    <p className="precio">${precio}</p>  
                    <p className="oferta">${oferta}</p> 
                </div>  
            </div>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
        </div>
    </div>
  

    )
};
