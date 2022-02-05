import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../helpers/getProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import '../../App.css'


export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ();
    const [load, setLoad] = useState(true);
    const { idItem } = useParams();
           
    useEffect(() => {

        getProducts
        .then(res => setProduct (res.find((prod) => prod.id === idItem)))
        .catch(err => console.log(err))  
        .finally(()=> setLoad(false)) 

    }, []);

    console.log()

    return (
        <>
            { load ? <h2 className="centrado contenedor">Cargando ...</h2> : <ItemDetail product = { product } /> }                                    
        </>
    )
};
