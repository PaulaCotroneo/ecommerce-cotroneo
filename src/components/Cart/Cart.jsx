import { useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore'
import { CartList } from '../CartList/CartList';
import '../../App.css'


export const Cart = () => {

  const { cartList, totalPrice, emptyCart } = useCartContext();

  const [ idOrder, setIdOrder ] = useState('');

  const [ dataForm, setDataForm ] = useState({
      email: '',
      phone: '',
      name: ''
  })

  const goShopping = async (e) => {
      e.preventDefault()  
           
      let purchaseOrder = {}
         
      purchaseOrder.buyer = dataForm;
      purchaseOrder.items = cartList.map ( cartItem => {
          const id = cartItem.item.id;
          const name = cartItem.item.name;
          const price = cartItem.item.price * cartItem.quantity;
          const quantity = cartItem.quantity
          
          return {
              id, 
              name, 
              price, 
              quantity
          }   
      }) 
      purchaseOrder.total = totalPrice(); 
     
      const db = getFirestore()
      const ordersCollection = collection (db, 'orders')
      await addDoc( ordersCollection, purchaseOrder)
      .then(resp => setIdOrder(resp.id))
      
      
      const queryCollection = collection(db, 'items')
          
      const queryUpdateStock = query(
          queryCollection, 
          where ( documentId() , 'in', cartList.map ( it => it.item.id ) )          
      ) 
  
      const batch = writeBatch(db)
  
      await getDocs(queryUpdateStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
           })
      ))
      .catch(err => console.log(err))
      .finally(() => { 
        setDataForm({
          email: '',
          phone: '',
          name: ''
        })
        emptyCart();
      })
          
  
      batch.commit()
  
    }

  const handleChange = (event) => {      
      setDataForm({ 
          ...dataForm,
          [event.target.name]: event.target.value
      })
  }

  return (

    <div className="container">
      <div className="shoppingCart__idOrder center">
        {idOrder !== '' && `Muchas Gracias por su compra!! El id de su orden es: ${idOrder}` }
      </div>
      { cartList.length !== 0 ? 
        <>
        <CartList/>
        <form className= "form" onSubmit={goShopping}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre' 
                    onChange={handleChange}
                    value={dataForm.name}
                />

                <input 
                    type='tel' 
                    name='phone'
                    placeholder='Teléfono' 
                    onChange={handleChange}
                    value={dataForm.phone}
                />

                <input 
                    type='email' 
                    name='email'
                    placeholder='E-mail' 
                    onChange={handleChange}
                    value={dataForm.email}
                />  
              <button className="form__button">Procesar Orden</button>
            </form>
        </>
      :   
        <>   
          <div className="center">
            <h2 className="shoppingCart__messageTitle">Tu carrito está ahora vacío!</h2>
              <p className="shoppingCart__message">Tenemos los mejores productos para tus mascotas, te invitamos a visitar nuestra tienda.</p>
              <Link to='/'>
                <button className="shoppingCart__button">Ir a Nuestra Tienda</button>
              </Link>
          </div>
        </> 
      }
    </div>

  )

};
