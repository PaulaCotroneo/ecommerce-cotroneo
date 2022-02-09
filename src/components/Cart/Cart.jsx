import { useCartContext } from '../../context/CartContext';
import '../../App.css'


export const Cart = () => {

  const { cartList, eliminarDelCarrito, vaciarCarrito } = useCartContext()

  return (
    <div className="contenedor">
      <h2>Carrito de compras:</h2> 
      { cartList.map(produ => 
      <div className="carrito">  
        <div className="carrito__imagen">
          <img src={produ.imagen} alt={produ.descripImagen}/>
        </div>
        <div className="carrito__nombre">{produ.nombre}</div>
        <div className="carrito__precio">${produ.precio}</div>
        <div className="carrito__cantidad">{produ.cantidad}</div>
        <div className="carrito__eliminar">
          <button className="borrar-producto" onClick={() => eliminarDelCarrito(produ)}>x</button>
        </div>
      </div>
      )}
      <button className="carrito__vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
)
};
