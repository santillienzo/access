import React, {useState}from 'react';

import './nav.css';
import {
    Link as LinkScroll 
} from 'react-scroll'
import {
    Route,
    Switch,
    Link as LinkRecharge 
} from 'react-router-dom'

import logo from '../../assets/logo_access2.png'

const Nav = () => {

    const[alternar, setAlternar] = useState(false)
    const abrirLinks = () =>{
        const links = document.getElementById('links-responsive')
        if (alternar == true) {
            links.style.display ="none"
            setAlternar(false)
        }else{
            links.style.display ="flex"
            setAlternar(true)
        }
    }



    return (
        <header className="container">
            <div className="row nav-web">
                <div className="col-1 d-flex justify-content-end align-items-center header_img-container">
                    <img src={logo}/>
                </div>
                <div className="col-11">
                    <ul className="nav justify-content-end ">
                            <Switch>
                                <Route exact path="/">
                                    <li className="nav-item">
                                        <LinkScroll to="inicio" className="nav-link .non-selectable" aria-current="page">Inicio</LinkScroll>
                                    </li>
                                    <li className="nav-item">
                                        <LinkScroll to="nosotros" className="nav-link .non-selectable" smooth={true} duration={5}>Nosotros</LinkScroll>
                                    </li>
                                    <li className="nav-item">
                                        <LinkScroll to="servicios" className="nav-link">Servicios</LinkScroll>
                                    </li>
                                    <li className="nav-item">
                                        <LinkRecharge to="/productos" className="nav-link .non-selectable">Productos</LinkRecharge>
                                    </li>
                                    <li className="nav-item">
                                        <LinkScroll to="contacto" className="nav-link .non-selectable">Contacto</LinkScroll>
                                    </li>
                                </Route>

                                <Route path="/productos">
                                    <li className="nav-item">
                                        <LinkRecharge to="" className="nav-link" aria-current="page">Inicio</LinkRecharge>
                                    </li>
                                    <li className="nav-item">
                                        <LinkRecharge to="" className="nav-link">Nosotros</LinkRecharge>
                                    </li>
                                    <li className="nav-item">
                                        <LinkRecharge to="" className="nav-link">Servicios</LinkRecharge>
                                    </li>
                                    <li className="nav-item">
                                        <LinkScroll to="/productos" className="nav-link">Productos</LinkScroll>
                                    </li>
                                    <li className="nav-item">
                                        <LinkRecharge to="" className="nav-link">Contacto</LinkRecharge>
                                    </li>
                                </Route>
                            </Switch>
                        
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
                    <Switch>
                            <Route exact path="/">
                                <li className="nav-item">
                                    <LinkScroll to="inicio" className="nav-link" aria-current="page">Inicio</LinkScroll>
                                </li>
                                <li className="nav-item">
                                    <LinkScroll to="nosotros" className="nav-link" smooth={true} duration={5}>Nosotros</LinkScroll>
                                </li>
                                <li className="nav-item">
                                    <LinkScroll to="servicios" className="nav-link">Servicios</LinkScroll>
                                </li>
                                <li className="nav-item">
                                    <LinkRecharge to="/productos" className="nav-link">Productos</LinkRecharge>
                                </li>
                                <li className="nav-item">
                                    <LinkScroll to="contacto" className="nav-link">Contacto</LinkScroll>
                                </li>
                            </Route>

                            <Route path="/productos">
                                <li className="nav-item">
                                    <LinkRecharge to="" className="nav-link" aria-current="page">Inicio</LinkRecharge>
                                </li>
                                <li className="nav-item">
                                    <LinkRecharge to="" className="nav-link">Nosotros</LinkRecharge>
                                </li>
                                <li className="nav-item">
                                    <LinkRecharge to="" className="nav-link">Servicios</LinkRecharge>
                                </li>
                                <li className="nav-item">
                                    <LinkScroll to="/productos" className="nav-link">Productos</LinkScroll>
                                </li>
                                <li className="nav-item">
                                    <LinkRecharge to="" className="nav-link">Contacto</LinkRecharge>
                                </li>
                            </Route>
                        </Switch>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Nav;