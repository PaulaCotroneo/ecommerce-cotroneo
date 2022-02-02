import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../App.css'
import logoFermin from './logo.png'


export const NavBar = () => {
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
                <CartWidget/>
            </Link>
        </header>
    )
}
