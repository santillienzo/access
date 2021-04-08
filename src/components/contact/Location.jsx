import React, {useState, useEffect} from 'react';
import Title from '../1-microComponents/title/Title'
import Map from './Map';
import './location.css'




const Location = () => {
    const [idSucursal, setSucursal] = useState("Rivadavia");
    const [direccion, setDireccion] = useState("W.Nuñez 597")

    const elegirSucursal = (e)=>{
        const sucursal = e.target.value;
        setSucursal(sucursal);
        console.log(sucursal);
    }
    useEffect(()=>{
        if (idSucursal == "Rivadavia") {
            setDireccion("W.Nuñez 597")
        } else if(idSucursal == "Junín"){
            setDireccion("Av. Mitre 8")
        } else{
            setDireccion("25 de Mayo 252")
            
        }
    })


    return (
        <div className="location_container">
            <Title titleText="Ubicación" id="contacto"/>
            <div className="map-container">
                <p className="map-text">Elije la sucursal:</p>
                <select name="departamento" id="departamento" onClick={elegirSucursal}>
                    <option>Rivadavia</option>
                    <option>Junín</option>
                    <option>San Martín</option>
                </select>
                <p>{direccion}</p>
                <Map/>

                
                
                
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