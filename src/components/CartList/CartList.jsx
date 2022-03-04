import { useCartContext } from '../../context/CartContext';
import '../../App.css'

export const CartList = () => {
    const { cartList, totalPrice, removeFromCart, emptyCart } = useCartContext();

    return (
      <>
      { cartList.map(article => 
        <div className="shoppingCart">  
          <div className="shoppingCart__image">
            <img src={article.item.image} alt={article.item.altImage}/>
          </div>
          <div className="shoppingCart__name">{article.item.name}</div>
          <div className="shoppingCart__price">${article.item.price}</div>
          <div className="shoppingCart__quantity">Cantidad: {article.quantity}</div>
          <div className="shoppingCart__remove">
            <button className="remove-producto" onClick={() => removeFromCart(article.item.id)}>x</button>
          </div>
        </div> 
      ) }
        <div className="shoppingCart__total center">
          {`Total a Pagar: $${totalPrice()}`}
        </div>
        <div className="center">
          <button className="shoppingCart__button" onClick={ emptyCart }>Vaciar Carrito</button>
        </div>
        </>
    )
}


