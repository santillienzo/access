import React from 'react';
import Title from '../1-microComponents/title/Title'
import Map from './Map';
import './location.css'







const Location = () => {
    return (
        <div>
            <Title titleText="Ubicación" id="contacto"/>
            <div className="map-container">
                <p className="map-text">Elije la sucursal:</p>
                <select>
                    <option>Rivadavia</option>
                    <option>Junín</option>
                    <option>San Martín</option>
                </select>
                <p>W.Nuñez 597</p>
                <Map
                    latitud={-33.1960507977805}
                    longitud={-68.46413078725658}
                />
                
            </div>
        </div>
    );
};

export default Location;

                //Av. Mitre 8
                // <Map
                //     latitud={-33.143122960923655}
                //     longitud={-68.48505867957421}
                // />
                // 25 de Mayo 252
                // <Map
                //     latitud={-33.08589562050442}
                //     longitud={-68.47415517625076}
                // />