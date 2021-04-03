import React from 'react';
import './product.css';
import Title from '../1-microComponents/title/Title'

import pcGamer from '../../assets/product/banner/pcgamer.png';



const ProdPrincipal = () =>{
    return(
        <div className="prod_principal-container">
            <div className="text_prod_prin-container">
                <div>
                    <h3>NOGA STORMER</h3>
                    <p>Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.
                    Contiene 1 Puerto USB 3.0, 2 Puertos USB 2.0 y conexiones miniplug para Auriculares y Mic. <br/>
                    Posee 2 paneles de vidrio tonalizados. <br/>
                    Incluye Fuente de Alimentación de 600W. 
                    </p>
                </div>
            </div>
            <div className="img_prod_prin-container">
                <div>
                    <img src={pcGamer}/>
                </div>
            </div>
        </div>
    )
};


const Producto = () => {
    return(
        <div className="producto">
            <div className="card" >
                <img src={pcGamer} className="card-img-top img-carta" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">NOGA STORMER</h5>
                    <p className="card-text texto-carta">Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.</p>
                    <a href="#" className="btn btn-primary">Encargar</a>
                    <p className="pricing_card ">$95.000</p>
                </div>
            </div>
        </div>
    )
}




const Product = () => {
    return (
        <div>
            <ProdPrincipal/>
            <div className="productos-container">
                <Title titleText="Productos"/>
                <div className="stock-container">
                    <select className="form-select">
                        <option>Todo</option>
                        <option>Pc</option>
                        <option>Impresoras</option>
                        <option>Video proyectores</option>
                        <option>Equipos de sonido</option>
                        <option>Cc tv</option>
                        <option>Notebooks | Netbooks</option>
                        <option>Monitores</option>
                        <option>Conectividad</option>
                        <option>Almacenamiento</option>
                        <option>Tintas</option>
                        <option>Accesorios</option>
                    </select>
                    <div className="tabla-productos">
                        <Producto/>
                        <Producto/>
                        <Producto/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;