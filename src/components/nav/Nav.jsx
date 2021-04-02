import React from 'react';

import './nav.css';
import {
    Link
} from 'react-router-dom'

import logo from '../../assets/logo_access.png'

const Nav = () => {
    return (
        <header className="container">
            <div className="row">
                <div className="col-1 d-flex justify-content-center align-items-center header_img-container">
                    <img src={logo}/>
                </div>
                <div className="col-11">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#nosotros" className="nav-link" href="#">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#servicios" className="nav-link" href="#">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link" href="#">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#contacto" className="nav-link" href="#">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/noticias" className="nav-link" href="#">Noticias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;