import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../helpers/getProducts"
import '../../App.css'


export function ItemListContainer () { 
    
    const [listProducts, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
    const categoriaId = 'Perro';
           
    useEffect(() => {
        getProducts 
        .then((data) => 
        setListProducts (
            categoriaId ? data.filter((el) => el.categoria === categoriaId) : data)
        )
        .catch(err => console.log(err))
        .finally(()=> setloading(false))    
    }, [])
    
    return (
        <div>
            <h1 className="encabezado centrado">Bienvenidos a Fermín Pet Shop!</h1>
            { loading ? <h2 className="encabezado centrado">Cargando ...</h2> : <ItemList listProducts= { listProducts } /> }                                   
        </div>
    )
}




