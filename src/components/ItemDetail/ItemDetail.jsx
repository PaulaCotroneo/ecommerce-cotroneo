import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ( { product } ) => {  

    const { cartList, agregarAlCarrito } = useCartContext();

    const [contador, setContador] = useState (0);

    function onAdd(cant){
        agregarAlCarrito({...product, cantidad: cant})
        setContador(cant)
    }  
    
    console.log(cartList)

  return (
    <>
    <div className="detalles contenedor">    
        <div key={product.id} className="detalle">
            <img className="detalle__imagen" src={product.imagen} alt={product.descripImagen}/>
            <div className="detalle__informacion"> 
                <h4>{product.nombre}</h4>  
                <p>Fermín {product.categoria}</p> 
                <p>{product.descripcion}</p>                                                            
                <p className="detalle__precio">${product.precio}</p>  
            {
                contador === 0 ? 
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                :
				    <>
					    <Link to='/cart'>
                            <button className="producto__btn">Terminar compra</button>
                        </Link>
					    <Link to='/'>
                            <button className="producto__btn">Continuar comprando</button>
                        </Link>
				    </>
		    } 
            </div>
        </div> 
    </div>
    </>
  
    )
};