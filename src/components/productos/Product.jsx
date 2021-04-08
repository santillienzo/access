import React, {useState} from 'react';
import './product.css';
import Title from '../1-microComponents/title/Title'

import pcGamer from '../../assets/product/banner/pcgamer.png';


//Banner de producto
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

//Productos
const objetoPc = {
    imagen: pcGamer,
    nombre: "NOGA STORMER",
    descripcion: "Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos",
    precio: "95.000",
    tipo: "pc"
}
const objetoImpresoras = {
    imagen: pcGamer,
    nombre: "Impresora",
    descripcion: "Impresora",
    precio: "95.000",
    tipo: "impresora"
}
const Producto = (props) => {
    

    return(
        <div className="producto">
            <div className="card" >
                <img src={props.imagen} className="card-img-top img-carta" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text texto-carta">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary btn_carta">Encargar</a>
                    <p className="pricing_card ">${props.precio}</p>
                </div>
            </div>
        </div>
    )
}



//Componente principal
const categorias = [
    {
        "nombre" : "Todo",
        "articulos" : [objetoPc,objetoImpresoras]
    },
    {
        "nombre" : "Pc",
        "articulos" : [objetoPc]
    },
    {
        "nombre" : "Impresoras",
        "articulos" : [objetoImpresoras]
    }
]


const Product = () => {

    const [idArticulos, setIdArticulos] = useState(0);

    const handlerCargarArticulos = (e) =>{
        const option = e.target.value;
        setIdArticulos(option)
        console.log(option)
    } 

    return (
        <div>
            <ProdPrincipal/>
            <div className="productos-container">
                <Title titleText="Productos"/>
                <div className="stock-container">
                    <select className="form-select" name="categorias" id="selCategorias" onClick={handlerCargarArticulos}>
                        {
                            categorias.map((item, i)=>(
                                <option value={i} key={i}>{item.nombre}</option>
                            ))
                        }
                        
                        {/* <option>Todo</option>
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
                        <option>Accesorios</option> */}
                    </select>
                    <div className="tabla-productos">
                    {
                        categorias[idArticulos].articulos.map((item,i)=>(
                            <Producto
                                key={i}
                                imagen={item.imagen}
                                nombre={item.nombre}
                                descripcion={item.descripcion}
                                precio={item.precio}
                            />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;