import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../helpers/getProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import '../../App.css'


export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ({});
    const { idItem } = useParams();
           
    useEffect(() => {

        getProducts
        .then(res => setProduct (res.find((prod) => prod.id === idItem)))
        .catch(err => console.log(err))  

    }, []);

    console.log(product.id)

    return (
        <>
            <ItemDetail product = { product } />                                    
        </>
    )
}
