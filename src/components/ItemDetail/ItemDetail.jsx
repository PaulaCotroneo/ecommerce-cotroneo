import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ( { product } ) => {  

    const { addToCart } = useCartContext();

    const [ count, setCount ] = useState(0);

    function onAdd ( quantity ) {
        addToCart ( {item: product, quantity: quantity} )
        setCount ( quantity )
    }  
    
    return (

        <>
        <div className="details container">    
            <div key={product.id} className="detail center">
                <img className="detail__image" src={product.image} alt={product.altImage}/>
                <div className="detail__information"> 
                    <h4>{product.name}</h4>  
                    <p>Fermín {product.category}</p> 
                    <p>{product.description}</p>                                                            
                    <p className="detail__price">${product.price}</p>  
                {
                    count === 0 ? 
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    :
                        <>
                            <p className="detail__message">Producto agregado al Carrito!</p>
                            <Link to='/cart'>
                                <button className="product__button">Terminar compra</button>
                            </Link>
                            <Link to='/'>
                                <button className="product__button">Continuar comprando</button>
                            </Link>
                        </>
                } 
                </div>
            </div> 
        </div>
        </>
  
    )
};