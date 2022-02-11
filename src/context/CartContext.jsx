import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {return useContext(cartContext)}


export function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){

        const evitarDuplicados = [...cartList]
        if (evitarDuplicados.some(i => i.item.id === item.item.id)) {
            evitarDuplicados.find(i => i.item.id === item.item.id).cantidad +=  item.cantidad
            setCartList(evitarDuplicados)
        } else {
            setCartList( [...cartList, item ] )
        }
    }

    function cantidadCarrito() {
        return cartList.reduce((acum, item) =>  acum += item.cantidad  ,0)
    }

    function precioTotal(){
        return cartList.reduce((acum, item) =>  acum= acum + (item.item.precio * item.cantidad),0)
    }

    function eliminarDelCarrito( id ){
        setCartList( cartList.filter( i => i.item.id !== id ) )
    } 

    function vaciarCarrito(){
        setCartList([])
    }

    return <cartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        cantidadCarrito,
        precioTotal,
        eliminarDelCarrito,
        vaciarCarrito
    }}>
            {children}
    </cartContext.Provider>;

};

