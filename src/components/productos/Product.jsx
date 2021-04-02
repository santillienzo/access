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
        <div className="container">
            <div class="card" >
                <img src={pcGamer} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
                <Title/>
                <Producto/>
            </div>
        </div>
    );
};

export default Product;