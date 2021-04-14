import React, {useState}from 'react';

import './nav.css';
import {
    Link
} from 'react-router-dom'

import logo from '../../assets/logo_access.png'

const Nav = () => {

    const[alternar, setAleternar] = useState(false)
    const abrirLinks = () =>{
        const links = document.getElementById('links-responsive')
        if (alternar == true) {
            links.style.display ="none"
            setAleternar(false)
        }else{
            links.style.display ="flex"
            setAleternar(true)
        }
    }



    return (
        <header className="container">
            <div className="row nav-web">
                <div className="col-1 d-flex justify-content-end align-items-center header_img-container">
                    <img src={logo}/>
                </div>
                <div className="col-11">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#servicios" className="nav-link">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#contacto" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-responsive">
                <div className="responsive-bar">
                    <span onClick={abrirLinks}>
                        <i class="fas fa-bars"></i>
                    </span>
                </div>
                <div className="links-responsive-container" id="links-responsive">
                    <ul className="links-responsive">
                        <li>
                            <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/#nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/#servicios" className="nav-link">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/productos" className="nav-link">Productos</Link>
                        </li>
                        <li>
                            <Link to="/#contacto" className="nav-link">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/noticias" className="nav-link">Noticias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;