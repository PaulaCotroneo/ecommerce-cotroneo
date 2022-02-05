import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ( {listProducts} ) => {
  return (
    <div className="productos contenedor">
      { listProducts.map( (prod) => (
      <Item 
      key={prod.id} 
      id={prod.id}
      nombre={prod.nombre} 
      imagen={prod.imagen} 
      descripImagen={prod.descripImagen} 
      categoria={prod.categoria} 
      precio={prod.precio} 
      oferta={prod.oferta} 
      stock={prod.stock}
      /> 
      ) ) }
    </div>
  )
};
