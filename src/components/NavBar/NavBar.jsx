import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { useCartContext } from '../../context/CartContext';
import '../../App.css'
import logoFermin from './logo.png'


export const NavBar = () => {

    const { cartQuantity } = useCartContext()

    return (
        
        <header className="header container">
            <Link to='/'>
                <div className="header__logo">
                    <img src={logoFermin} alt="logo-fermin"/>
                </div>
            </Link>
            <nav className="navigation">
                <ul className="navigation__menu">
                    <Link to='/category/dogs'><li>Productos Fermin Dogs</li></Link>
                    <Link to='/category/cats'><li>Productos Fermin Cats</li></Link>
                </ul>
            </nav>
            <Link to='/cart'>
                <div className="shoppingCart__iconquantity">{ cartQuantity() !== 0 && cartQuantity()}</div>
                <CartWidget/>
            </Link>
        </header>
    )
}
