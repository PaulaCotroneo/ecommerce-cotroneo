import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import './App.css';



export default function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">      
          <NavBar/>
          <Routes>
            <Route exact path='/' element={ <ItemListContainer/> } />
            <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
            <Route exact path='/detalle/:idItem' element={ <ItemDetailContainer/> } />
            <Route exact path='/cart' element={ <Cart/> } />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}


