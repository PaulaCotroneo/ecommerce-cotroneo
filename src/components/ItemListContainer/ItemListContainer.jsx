import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../helpers/getProducts"
import './ItemList.css'


export function ItemListContainer () { 
    
    const [listProducts, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
           
    useEffect(() => {
        getProducts 
        .then(res => setListProducts(res))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))    
    }, [])
    
    return (
        <div>
            <h1 className="encabezado centrado">Bienvenidos a Fermín Pet Shop!</h1>
            { loading ? <h2>Cargando ...</h2> : <ItemList listProducts= { listProducts } /> }
                                             
        </div>
    )
}

//export default ItemListContainer;


