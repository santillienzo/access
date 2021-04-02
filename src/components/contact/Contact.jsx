import React from 'react';
import Title from '../1-microComponents/title/Title'
import Map from './Map';
import './contact.css'


const Social = (props) =>{
    return(
        <li>
            <a href="#">
                <i class={props.icon}></i>
            </a>
        </li>
    )
}

const Contact = () => {
    return (
        <div className="contact-container">
            <Title titleText="Contacto"/>
            <ul className="social-container">
                <Social
                    icon="fab fa-facebook-f"
                />
                <Social
                    icon="fab fa-whatsapp"
                />
                <Social
                    icon="fab fa-instagram"
                />
            </ul>
            <Map/>
        </div>
    );
};

export default Contact;