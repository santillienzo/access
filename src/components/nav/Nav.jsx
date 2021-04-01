import React from 'react';

import './nav.css';

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
                            <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Noticias</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;