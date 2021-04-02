import React from 'react';
import Title from '../1-microComponents/title/Title'
import Map from './Map';
import './contact.css'


const Social = () =>{
    return(
        <li>
            <a href="#">
                <i class="fab fa-instagram"></i>
            </a>
        </li>
    )
}

const Contact = () => {
    return (
        <div className="contact-container">
            <Title/>
            <ul className="social-container">
                <Social/>
                <Social/>
                <Social/>
            </ul>
            <Map/> 
        </div>
    );
};

export default Contact;