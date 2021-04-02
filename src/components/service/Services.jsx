import React from 'react';
import Title from '../1-microComponents/title/Title'

import './services.css'
import software from '../../assets/service/software.png'
import device from '../../assets/service/sensible.png'
import repair from '../../assets/service/reparacion.png'

const Service = () =>{
    return(
        <div className="service-container">
            <div className="service-img">
                <img src={software}/>
            </div>
            <div className="service-text">
                <h3>Software</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo dui. Integer blandit leo erat, ut eleifend lorem suscipit eu. Curabitur tempor lacus quam, ut porta est pharetra ac.</p>
            </div>
        </div>
    )
}


const Services = () => {
    return (
        <div>
            <Title/>
            <div className="services-container">
                <Service/>
                <Service/>
                <Service/>
            </div>
        </div>
    );
};

export default Services;