import React from 'react';
import Title from '../1-microComponents/title/Title'

import './we.css'



const Hexagon = () =>{
    return(
        <div className="hexagon">
            <div className="shape">
                <h3>¿Quienes somos?</h3>
                <div className="hexagon-content">
                    <p>Somos una empresa argentina, nacida hace más de 20 años en la ciudad de Rivadavia (Mendoza), con el objetivo de cubrir las necesidades informáticas insatisfechas de las Empresas, logrando su inmediata aceptación y habiendo alcanzado en la actualidad una exitosa proyección a nivel nacional.</p>
                </div>
            </div>
        </div>
    );
}


const We = () => {
    return (
        <div>
            <Title/>
            <div className="hexagon-container">
                <Hexagon/>
                <Hexagon/>
                <Hexagon/>
            </div>
        </div>
    );
};

export default We;



// Somos una empresa argentina, nacida hace más de 20 años en la ciudad de Rivadavia (Mendoza), con el objetivo de cubrir las necesidades informáticas insatisfechas de las Empresas, logrando su inmediata aceptación y habiendo alcanzado en la actualidad una exitosa proyección a nivel nacional.

// Los efectos de la globalización han producido la aparición de diversos productos y servicios en distintos lugares del mundo. La creatividad es la base principal para captar las tendencias de los mercados más exigentes. Hoy en día es necesario contar con herramientas tecnológicas que nos permitan hacer frente a la alta competitividad imperante.

// Es nuestra misión primordial la incorporación e implementación de Tecnologías de Avanzada e Integración de Sistemas para la concreción de las metas trazadas.

// Contando con un eficiente y capacitado grupo de colaboradores y coordinando cada uno de los sectores de la empresa, desde la investigación hasta los servicios post venta; se logra el cumplimiento de metas inmediatas y la concreción de nuestra misión.