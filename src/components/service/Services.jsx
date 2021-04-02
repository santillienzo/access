import React from 'react';
import Title from '../1-microComponents/title/Title'

import './services.css'
import software from '../../assets/service/software.png'
import device from '../../assets/service/sensible.png'
import repair from '../../assets/service/reparacion.png'

const Service = (props) =>{
    return(
        <div className="service-container">
            <div className="service-img">
                <img src={props.imgService}/>
            </div>
            <div className="service-text">
                <h3>{props.titleService}</h3>
                <p>{props.textService}</p>
            </div>
        </div>
    )
}


const Services = () => {
    return (
        <div>
            <Title titleText="Servicios"/>
            <div className="services-container">
                <Service
                    imgService={software}
                    titleService="Software"
                    textService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo dui. Integer blandit leo erat, ut eleifend lorem suscipit eu. Curabitur tempor lacus quam, ut porta est pharetra ac."
                />
                <Service
                    imgService={device}
                    titleService="Venta infromática"
                    textService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo dui. Integer blandit leo erat, ut eleifend lorem suscipit eu. Curabitur tempor lacus quam, ut porta est pharetra ac."
                />
                <Service
                    imgService={repair}
                    titleService="Reparación electrónica"
                    textService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo dui. Integer blandit leo erat, ut eleifend lorem suscipit eu. Curabitur tempor lacus quam, ut porta est pharetra ac."
                />
            </div>
        </div>
    );
};

export default Services;