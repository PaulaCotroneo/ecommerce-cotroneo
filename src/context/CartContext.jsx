import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {return useContext ( cartContext ) }


export function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function addToCart(item){

        const isInCart = [...cartList]
        if (isInCart.some( i => i.item.id === item.item.id )) {
            isInCart.find( i => i.item.id === item.item.id ).quantity +=  item.quantity
            setCartList( isInCart )
        } else {
            setCartList( [...cartList, item ] )
        }
    }

    function cartQuantity() {
        return cartList.reduce( ( acum, item ) =>  acum += item.quantity  ,0)
    }

    function totalPrice(){
        return cartList.reduce((acum, item) =>  acum= acum + (item.item.price * item.quantity),0)
    }

    function removeFromCart( id ){
        setCartList( cartList.filter( i => i.item.id !== id ) )
    } 

    function emptyCart(){
        setCartList([])
    }

    return <cartContext.Provider value={{
        cartList,
        addToCart,
        cartQuantity,
        totalPrice,
        removeFromCart,
        emptyCart
    }}>
            {children}
    </cartContext.Provider>;

};

