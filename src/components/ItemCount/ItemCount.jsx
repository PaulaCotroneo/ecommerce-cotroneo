import { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
  const [contador, setcontador] = useState(initial);

  const handleAumentar=()=>{
    if (contador < stock) {
      setcontador(contador + 1)
    }
  }
  
  const handlerRestar=()=>{    
    if (contador > initial) {
      setcontador(contador - 1)
    }
  }

  const agregar=()=>{
    onAdd(contador)
  }

  return (
      <div>
        <button className="producto__btn" onClick={handleAumentar}>+</button>
        { contador }
        <button className="producto__btn" onClick={handlerRestar}>-</button><br/>
        <button className="producto__btnAgregarCarrito" onClick={agregar} >Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;
