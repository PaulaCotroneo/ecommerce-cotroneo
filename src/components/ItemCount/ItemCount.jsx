import { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  
  const handlerSubtract = () => {    
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const add = () => {
    onAdd(count)
  }

  return (

      <div>
        <button className="quantity__button" onClick={ handleIncrease }>+</button>
        { count }
        <button className="quantity__button" onClick= { handlerSubtract }>-</button><br/>
        <button className="product__button" onClick= { add } >Agregar al carrito</button>
      </div>
      
  )
}

export default ItemCount;
