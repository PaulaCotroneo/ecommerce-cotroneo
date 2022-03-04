import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import '../../App.css'



export const ItemListContainer = () => {
    
    const [ listProducts, setListProducts ] = useState ([]);
    const [ loading, setLoading ] = useState(true);
    const { idCategory } = useParams();
           
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')

            const queryFilter = !idCategory ?
                queryCollection                
            : 
                query(queryCollection, 
                    where('category', '==', idCategory)
                )

            getDocs(queryFilter)
            .then(resp => setListProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 

    }, [ idCategory ])
    
       
    return (

        <>
            { loading ? 
                <h2 className="loading center">Cargando ...</h2> 
            : 
                <ItemList 
                    listProducts= { listProducts } 
                /> 
            }                                   
        </>
        
    )
}




