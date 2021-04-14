import React, { useState } from 'react';

import Title from '../1-microComponents/title/Title'
import './contact.css'





const Social = (props) =>{
    return(
        <li>
            <a href={props.link} target="_BLANK">
                <i class={props.icon}></i>
            </a>
        </li>
    )
}

const Contact = () => {

    const[alternar, setAleternar] = useState(false)
    const abrirNumero = () =>{
        const numeros = document.getElementById('numeros')
        const aviso = document.getElementById('aviso_click')
        if (alternar == true) {
            numeros.style.display ="none"
            aviso.style.display= "block";
            setAleternar(false)
        }else{
            aviso.style.display= "none";
            numeros.style.display ="block"
            setAleternar(true)
        }
    }


    return (
        <div className="contact-container">
            <Title titleText="Contacto" id="contacto"/>
            <div className="contactos-container">
                <ul className="social-container">
                    <Social
                        icon="fab fa-facebook-f"
                        link="https://www.facebook.com/accessvirtual"
                    />
                    <Social
                        icon="fab fa-whatsapp"
                        link="https://www.instagram.com/access.lideresentecnologia/"
                    />
                    <Social
                        icon="fab fa-instagram"
                        link=""
                    />
                    <li onClick={abrirNumero} className="penta-phone">
                        <div href="#">
                            <i class="fas fa-phone"></i>
                        </div>
                    </li>
                </ul>
                <div className="aviso_click" id="aviso_click">
                    <p><span>Clickea</span> alguno de los íconos para más información</p>
                </div>
                <div className="cel-container container" id="numeros">
                    <div className="row">
                        <div className="col-4 dep">Rivadavia</div>
                        <div className="col-8"> (0263) 4445900</div>
                    </div>
                    <div className="row">
                        <div className="col-4 dep">Junín</div>
                        <div className="col-8"> (0263) 4498375</div>
                    </div>
                    <div className="row">
                        <div className="col-4 dep">San Martín</div>
                        <div className="col-8">(0263) 4428808</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;