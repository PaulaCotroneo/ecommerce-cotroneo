import { useEffect, useState } from "react"
import { getFetch } from "../../productos/mock"
import ItemCount from '../ItemCount/ItemCount'
import './ItemList.css'


export function ItemListContainer () {
    
    const [productos, setProductos] = useState ([])
    const [loading, setloading] = useState(true)
           
    useEffect(() => {
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))    
    }, [])

    function onAdd(cant){
        console.log(cant)
    }
    
    return (
        <div>
            <h1 className="encabezado centrado">Bienvenidos a Fermín Pet Shop!</h1>
            { loading ? <h2>Cargando ...</h2> :
                                    productos.map( prod => 
                                        <div className="productos contenedor">
                                            <div key={prod.id} className="producto">
                                                <img className="producto__imagen" src={prod.imagen} alt={prod.descripImagen}/> 
                                                <div className="producto__informacion"> 
                                                    <h4>{prod.nombre}</h4>  
                                                    <p>Fermín {prod.categoria}</p>                                                            
                                                    <div className="producto__precio">  
                                                        <p className="precio">${prod.precio}</p>  
                                                        <p className="oferta">${prod.oferta}</p> 
                                                    </div>  
                                                </div>
                                                <ItemCount initial={1} stock={prod.stock} onAdd={onAdd}/>
                                            </div>
                                        </div>
            ) }                  
        </div>
    )
}


