import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ( {products} ) => {

    return (

            <div key={products.id} className="product">
                <img className="product__image" src={products.image} alt={products.altImage}/> 
                <div className="product__information"> 
                    <h4>{products.name}</h4>  
                    <p>Fermín {products.category}</p>                                                            
                    <div className="product__price">  
                        <p className="price">${products.price}</p>  
                        <p className="discount">${products.noOffer}</p> 
                    </div>  
                    <Link to={ `/detail/${products.id}` }>
                        <button className="product__button">Detalle del Producto</button>
                    </Link>
                </div>
            </div>  

    )
};
