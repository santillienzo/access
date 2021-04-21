import React from 'react';
import Title from '../1-microComponents/title/Title'

import './we.css'
import team from '../../assets/nosotros/team.jpg' 
import we from '../../assets/nosotros/we.jpg' 
import job from '../../assets/nosotros/job.jpg' 



const Hexagon = (props) =>{
    return(
        <div className="hexagon">
            <div className="shape">
                <img src={props.imgName}/>
                <h3>{props.titleHexagon}</h3>
                <div className="hexagon-content">
                    <p>{props.textHexagon}</p>
                </div>
            </div>
        </div>
    );
}


const We = () => {
    return (
        <div className="we-container">
            <Title titleText="Nosotros" id={"nosotros"}/>
            <div className="hexagon-container">
                <Hexagon
                    imgName={team}
                    titleHexagon="Nuestra misión"
                    textHexagon="Es nuestra misión primordial la incorporación e implementación de Tecnologías de Avanzada e Integración de Sistemas para la concreción de las metas trazadas."
                />
                <Hexagon
                    imgName={we} 
                    titleHexagon="¿Quienes somos?" 
                    textHexagon="Somos una empresa argentina, nacida hace más de 20 años en la ciudad de Rivadavia (Mendoza), con el objetivo de cubrir las necesidades informáticas insatisfechas de las Empresas, logrando su inmediata aceptación y habiendo alcanzado en la actualidad una exitosa proyección a nivel nacional."    
                />
                <Hexagon
                    imgName={job}
                    titleHexagon="Nuestro equipo"
                    textHexagon="Contando con un eficiente y capacitado grupo de colaboradores y coordinando cada uno de los sectores de la empresa, desde la investigación hasta los servicios post venta; se logra el cumplimiento de metas inmediatas y la concreción de nuestra misión."
                />
            </div>
        </div>
    );
};

export default We;




// Es nuestra misión primordial la incorporación e implementación de Tecnologías de Avanzada e Integración de Sistemas para la concreción de las metas trazadas.

// Contando con un eficiente y capacitado grupo de colaboradores y coordinando cada uno de los sectores de la empresa, desde la investigación hasta los servicios post venta; se logra el cumplimiento de metas inmediatas y la concreción de nuestra misión.