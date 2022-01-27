import React, { useEffect, useState } from "react"
import { getProducts } from "../../helpers/getProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import '../../App.css'



export function ItemDetailContainer () { 
    
    const [product, setProduct] = useState ([])
    const productId = 5 ;
           
    useEffect(() => {
        getProducts 
        .then((data) => { 
            setProduct (
                data.find((item) => item.id === productId)
                )
        })
        .catch(err => console.log(err))  
    }, [])
    
    return (
        <div>
            <ItemDetail product = { product } />                                    
        </div>
    )
}
