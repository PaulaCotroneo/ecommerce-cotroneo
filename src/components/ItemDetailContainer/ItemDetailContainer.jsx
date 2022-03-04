import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import '../../App.css'


export const ItemDetailContainer = () => {
    
    const [ product, setProduct ] = useState ();
    const [ load, setLoad ] = useState(true);
    const { idItem } = useParams();
           
    useEffect(() => {

        const db = getFirestore()      
        const itemSelect = doc(db, 'items', idItem) 
        getDoc(itemSelect)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoad(false)) 
       
    }, []);


    return (

        <>
            { load ? 
                <h2 className="loading scenter">Cargando ...</h2> 
            : 
                <ItemDetail 
                    product = { product } 
                /> 
            }                                    
        </>
        
    )
};
