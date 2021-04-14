import React from 'react';
import './producto.css'

const Producto = (props) => {
    return(
        <div className="producto">
            <div className="card" >
                <img src={props.imagen} className="card-img-top img-carta" alt="..." />
                <div className="card-body">
                    <h5 className="card-title titulo-carta">{props.nombre}</h5>
                    <p className="card-text texto-carta">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary btn_carta">Encargar</a>
                    <p className="pricing_card ">${props.precio}</p>
                </div>
            </div>
        </div>
    )
}
export default Producto;