import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../helpers/getProducts"
import '../../App.css'



export const ItemListContainer = () => {
    
    const [listProducts, setListProducts] = useState ([]);
    const [loading, setLoading] = useState(true);
    const { idCategoria } = useParams();
           
    useEffect(() => {

        if (idCategoria) {
            getProducts 
            .then(res => setListProducts (res.filter((el) => el.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))   
        } else {
            getProducts 
            .then(res => setListProducts(res))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }

    }, [ idCategoria ])

    
    return (
        <div>
            <h1 className="centrado contenedor">Bienvenidos a Fermín Pet Shop!</h1>
            { loading ? <h2 className="centrado contenedor">Cargando ...</h2> : <ItemList listProducts= { listProducts } /> }                                   
        </div>
    )
}




