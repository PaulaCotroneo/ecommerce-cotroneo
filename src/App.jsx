import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { Hero } from './components/Hero/Hero';




export default function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">    
          <NavBar/>
          <Hero/>
          <Routes>
            <Route exact path='/' element={ <ItemListContainer/> } />
            <Route exact path='/category/:idCategory' element={ <ItemListContainer/> } />
            <Route exact path='/detail/:idItem' element={ <ItemDetailContainer/> } />
            <Route exact path='/cart' element={ <Cart/> } />
          </Routes>
          <Footer/>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}


