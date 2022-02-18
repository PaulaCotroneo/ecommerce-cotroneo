import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore'
import '../../App.css'


export const Cart = () => {

  const { cartList, precioTotal, eliminarDelCarrito, vaciarCarrito } = useCartContext();

  const realizarCompra = async (e) => {
    e.preventDefault()  
         
    let orden = {}
       
    orden.buyer = {name:'Paula',email: 'pau@gmail.com', phone: '1234567890'}
    orden.items = cartList.map(cartItem => {
        const id = cartItem.item.id;
        const nombre = cartItem.item.nombre;
        const precio = cartItem.item.precio * cartItem.cantidad;
        const cantidad = cartItem.cantidad
        
        return {
            id, 
            nombre, 
            precio, 
            cantidad
        }   
    }) 
    orden.total = precioTotal(); 

    console.log(orden)
    
    const db = getFirestore()
    const ordersCollection = collection (db, 'orders')
    await addDoc( ordersCollection, orden)
    .then(resp => console.log(resp))
    
    const queryCollection = collection(db, 'items')
        
    const queryActulizarStock = query(
        queryCollection, 
        where ( documentId() , 'in', cartList.map(it => it.item.id) )          
    ) 

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
         })
    ))
    .catch(err => console.log(err))
    .finally(() =>console.log('Se actualiza el Stock'))

    batch.commit()

  }


  return (
    <div className="contenedor">
      { cartList.length !== 0 ? <>
        { cartList.map(produ => 
        <div className="carrito">  
          <div className="carrito__imagen">
            <img src={produ.item.imagen} alt={produ.item.descripImagen}/>
          </div>
          <div className="carrito__nombre">{produ.item.nombre}</div>
          <div className="carrito__precio">${produ.item.precio}</div>
          <div className="carrito__cantidad">{produ.cantidad}</div>
          <div className="carrito__eliminar">
            <button className="borrar-producto" onClick={() => eliminarDelCarrito(produ.item.id)}>x</button>
          </div>
        </div> 
        ) }
        <div className="carrito__precioTotal">
          {`Total a Pagar: $${precioTotal()}`}
        </div>
        <button className="carrito__btn" onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button className="carrito__btn" onClick={realizarCompra}>Realizar Orden</button>
        </>
      :   
        <>   
        <h2 className="carrito__mensaje">El carrito está vacío!</h2>
        <Link to='/'>
          <button className="carrito__btn">Conoce Nuestros Productos</button>
        </Link>
        </> 
      }
    </div>
  )

};
