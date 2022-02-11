import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css'


export const Cart = () => {

  const { cartList, precioTotal, eliminarDelCarrito, vaciarCarrito } = useCartContext()

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
