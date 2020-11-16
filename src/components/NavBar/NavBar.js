import React from 'react';
import './NavBar.css';
import Carrito from './carrito/Cartlcon.js';
const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark " >
            <a className="navbar-brand" href="#">♥ Mi tienda</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"> Nosotros </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                </ul>
            </div>
            <div>
                <a className="nav-link" href="#">
                    <Carrito />
                </a>
            </div>
        </nav>
        
    )
}

export default NavBar;