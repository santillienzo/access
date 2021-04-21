import React from 'react';

import './home.css'
import banner from '../../assets/banner.jpg';

const Home = () => {

    //Función para desaparecer el aviso
    window.addEventListener("scroll",function(){
        const deslizar = document.querySelector(".responsive-aviso-container");
        if(deslizar != null){
            deslizar.classList.toggle("hide",window.scrollY > 750);
        }
    });


    return (
        <div className="home" id="inicio">
            <img src={banner}/>
            <div className="text-banner-container">
                <p className="text-banner">Bienvenidos a ACCESS <br/> <span>Líderes en tecnología</span></p>
            </div>
            <div className="responsive-aviso-container">
                <div className="responsive-aviso">
                    <p>Desliza</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
};

export default Home;