import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from "react-router-dom"
//import { getProducts } from "../../helpers/getProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import '../../App.css'


export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ();
    const [load, setLoad] = useState(true);
    const { idItem } = useParams();
           
    useEffect(() => {

        const db = getFirestore()      
        const itemRef = doc(db, 'items', idItem) 
        getDoc(itemRef)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoad(false)) 

        /*
        getProducts
        .then(res => setProduct (res.find((prod) => prod.id === idItem)))
        .catch(err => console.log(err))  
        .finally(()=> setLoad(false)) 
        */
       
    }, []);

    console.log()

    return (
        <>
            { load ? <h2 className="centrado contenedor">Cargando ...</h2> : <ItemDetail product = { product } /> }                                    
        </>
    )
};
