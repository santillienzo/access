import React, {useState, useEffect} from 'react';
import imagenes from '../../../assets/product/imagenes';
import './banner.css'


const Banner = () => {
    let [i, setI] = useState(1);

    useEffect(()=>{
        //Definimos los banners
        const banner1 = document.getElementById("banner-1")
        const banner2 = document.getElementById("banner-2")

        //Definir los indicadores y asignarle valor inicial
        const indicadores = document.querySelectorAll('.indi')
        indicadores[0].classList.add("indi-sel")
        
        //Definimos los títulos que va a tener y el objeto título
        const titulos = ["NOGA STORMER","PANTALLA SAMSUNG", "EQUIPO DE SONIDO"]
        let title1 = document.getElementById("titleBanner1")
        let title2 = document.getElementById("titleBanner2")
        title1.innerHTML = titulos[0]
        
        //Definimos el texto que tendra la imagen y el objeto texto
        const textos = [
            "Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.Contiene 1 Puerto USB 3.0, 2 Puertos USB 2.0 y conexiones miniplug para Auriculares y Mic. <br/>Posee 2 paneles de vidrio tonalizados. <br/>Incluye Fuente de Alimentación de 600W. ",//
            "Los TV QLED de Samsung están compuestos de materiales inorgánicos que brindan una imagen coherente, brillante y vívida durante años.",//
            "Lleva tus fiestas a otro nivel con este potente sistema de sonido compacto. Siente el ritmo de tus pistas favoritas con tweeters de alta eficiencia y JET BASS BOOSTER."
        ]
        let texto1 = document.getElementById("textBanner1")
        let texto2 = document.getElementById("textBanner2")
        texto1.innerHTML = textos[0]
        
        //Definimos las imagenes
        const images = [imagenes.bannerPcGamer, imagenes.bannerMonitor, imagenes.bannerSonido]
        var img1 = document.getElementById("imagenBanner1")
        var img2 = document.getElementById("imagenBanner2")
        img1.src = images[0]

        //Definimos los fondos
        const fondos = ["#a61414b9","#a0a2a165", "#29aae24f"]
        let fondo1 = document.getElementById("fondo1")
        let fondo2 = document.getElementById("fondo2")
        fondo1.style.backgroundColor = fondos[0]


        const switchBanner = ()=>{
            img2.src = images[i]
            title2.innerHTML = titulos[i]
            texto2.innerHTML = textos[i]
            fondo2.style.backgroundColor = fondos[i]
            // console.log(it)
            //Definimos el indicador actual y manipulamos las clases
            const indicadorActual = indicadores[i]
            Array.from(indicadores).forEach(cir => cir.classList.remove("indi-sel"))
            indicadorActual.classList.add("indi-sel")

            //
            banner2.classList.add("active")
            setI(i++)
            console.log(i)
            if (i == indicadores.length) {
                i = 0
            }

            setTimeout(()=>{
                img1.src = img2.src
                title1.innerHTML = title2.textContent
                texto1.innerHTML = texto2.textContent
                fondo1.style.backgroundColor = fondo2.style.backgroundColor
                banner2.classList.remove("active")
            },1000)
        }
        
        window.setInterval(switchBanner,5000);

    },[])
    

    return (
        <div className="prod_principal-container">
            <div className="banner" id="banner-1">
                <div className="text_prod_prin-container">
                    <div>
                        <h3 id="titleBanner1"></h3>
                        <p id="textBanner1">
                        </p>
                    </div>
                </div>
                <div className="img_prod_prin-container">
                    <div id="fondo1">
                        <img id="imagenBanner1" src=""/>
                    </div>
                </div>
            </div>
            <div className="banner" id="banner-2">
                <div className="text_prod_prin-container">
                    <div>
                        <h3 id="titleBanner2"></h3>
                        <p id="textBanner2">
                        </p>
                    </div>
                </div>
                <div className="img_prod_prin-container">
                    <div id="fondo2">
                        <img id="imagenBanner2" src=""/>
                    </div>
                </div>
            </div>
            <div className="indicadores">
                <img src={imagenes.bannerPcGamer}  alt=""  className="indi" />
                <img src={imagenes.bannerMonitor}  alt="" className="indi" />
                <img src={imagenes.bannerSonido}  alt="" className="indi" />
            </div>
        </div>
    );
};

export default Banner;