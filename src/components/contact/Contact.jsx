import React from 'react';
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