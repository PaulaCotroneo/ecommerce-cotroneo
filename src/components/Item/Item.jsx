import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ( {id, nombre, imagen, descripImagen, categoria, precio, oferta} ) => {

    
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
                <Link to={ `/detalle/${id}` }>
                    <button className="producto__btnDetalleProducto">Detalle del Producto</button>
                </Link>
            </div>
        </div>
    </div>
  
    )
};
