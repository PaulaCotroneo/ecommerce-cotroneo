import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { useCartContext } from '../../context/CartContext';
import '../../App.css'
import logoFermin from './logo.png'


export const NavBar = () => {

    const { cantidadCarrito } = useCartContext()

    return (
        <header className="header contenedor">
            <Link to='/'>
                <div className="header__logo">
                    <img src={logoFermin} alt="logo-fermin"/>
                </div>
            </Link>
            <nav className="navegacion">
                <ul className="navegacion__menu">
                    <Link to='/categoria/perros'><li>Productos Fermin Perros</li></Link>
                    <Link to='/categoria/gatos'><li>Productos Fermin Gatos</li></Link>
                </ul>
            </nav>
            <Link to='/cart'>
                <div className="cart__cantidad">{ cantidadCarrito() !== 0 && cantidadCarrito()}</div>
                <CartWidget/>
            </Link>
        </header>
    )
}
