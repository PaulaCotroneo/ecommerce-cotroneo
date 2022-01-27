import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../App.css'
import logoFermin from './logo.png'

export const NavBar = () => {
    return (
        <header className="header contenedor">
            <div className="header__logo">
                <img src={logoFermin} alt="logo-fermin"/>
            </div>
            <nav className="navegacion">
                <ul className="navegacion__menu">
                    <li>Nosotros</li>
                    <li>Tienda</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}
