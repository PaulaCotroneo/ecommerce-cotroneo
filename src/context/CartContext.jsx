import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {return useContext(cartContext)}


export function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){

        const evitarDuplicados = [...cartList]
        if (evitarDuplicados.some(i => i.id === item.id)) {
            evitarDuplicados.find(i => i.id === item.id).cantidad +=  item.cantidad
            setCartList(evitarDuplicados)
        } else {
            setCartList( [...cartList, item ] )
        }
    }

    function eliminarDelCarrito( item ){
        const eliminarItem = cartList.filter(i => i.id !== item.id);
        setCartList([...eliminarItem]);
    } 

    function vaciarCarrito(){
        setCartList([])
    }

    return <cartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
    }}>
            {children}
    </cartContext.Provider>;

};

