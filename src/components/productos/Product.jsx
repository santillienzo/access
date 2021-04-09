import React, {useState, useEffect} from 'react';
import './product.css';
import {db} from '../../fire_config';

import Title from '../1-microComponents/title/Title'
import pcGamer from '../../assets/product/banner/pcgamer.png';

//Subcomponentes

//Banner
const ProdPrincipal = () =>{

    return(
        <div className="prod_principal-container">
            <div className="text_prod_prin-container">
                <div>
                    <h3>NOGA STORMER</h3>
                    <p>Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.
                    Contiene 1 Puerto USB 3.0, 2 Puertos USB 2.0 y conexiones miniplug para Auriculares y Mic. <br/>
                    Posee 2 paneles de vidrio tonalizados. <br/>
                    Incluye Fuente de Alimentación de 600W. 
                    </p>
                </div>
            </div>
            <div className="img_prod_prin-container">
                <div>
                    <img src={pcGamer}/>
                </div>
            </div>
        </div>
    )
};

//Producto
const Producto = (props) => {
    

    return(
        <div className="producto">
            <div className="card" >
                <img src={props.imagen} className="card-img-top img-carta" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text texto-carta">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary btn_carta">Encargar</a>
                    <p className="pricing_card ">${props.precio}</p>
                </div>
            </div>
        </div>
    )
}

//Componente principal
const Product = () => {
    const [idArticulos, setIdArticulos] = useState(0);
    const [objetosPc, setObjetosPc] = useState([])
    const [objetosImpresoras, setObjetosImpresoras] = useState([])
    const [objetosProye, setObjetosProye] = useState([])
    const [objetosSonido, setObjetosSonido] = useState([])
    const [objetosCcTv, setObjetosCcTv] = useState([])
    const [objetosNote, setObjetosNote] = useState([])
    const [objetosMonit, setObjetosMonit] = useState([])
    const [objetosConect, setObjetosConect] = useState([])
    const [objetosAlmacen, setObjetosAlmacen] = useState([])
    const [objetosTintas, setObjetosTintas] = useState([])
    const [objetosAcces, setObjetosAcces] = useState([])
    const [objetosTodo, setObjetosTodo] = useState([])


    //Traemos todos los objetos de la base de datos
    useEffect(()=>{
        const getObjetos = async(campo,tipo, callback)=>{
            const {docs} = await db.collection('inventario').where(campo, "==", tipo).get();
            const array = docs.map(item=>({id:item.id, ...item.data() }));
            callback(array)
        }
        getObjetos("tipo","pc", setObjetosPc)
        getObjetos("tipo","impresora", setObjetosImpresoras)
        getObjetos("tipo","proyector", setObjetosProye)
        getObjetos("tipo","sonido", setObjetosSonido)
        getObjetos("tipo","cc tv", setObjetosCcTv)
        getObjetos("tipo","portatil", setObjetosNote)
        getObjetos("tipo","monitor", setObjetosMonit)
        getObjetos("tipo","conectividad", setObjetosConect)
        getObjetos("tipo","almacenamiento", setObjetosAlmacen)
        getObjetos("tipo","tintas", setObjetosTintas)
        getObjetos("tipo","accesorio", setObjetosAcces)
        getObjetos("estado",true, setObjetosTodo)
    },[])
    
    //Interactuamos con el objeto Select
    const handlerCargarArticulos = (e) =>{
        const option = e.target.value;
        setIdArticulos(option)
        console.log(option)
    } 

    //Definimos las categorías
    const categorias = [
        {
            "nombre" : "Todo",
            "articulos" : objetosTodo
        },
        {
            "nombre" : "Pc",
            "articulos" : objetosPc
        },
        {
            "nombre" : "Impresoras",
            "articulos" : objetosImpresoras
        },
        {
            "nombre" : "Video Proyectores",
            "articulos" : objetosProye
        },
        {
            "nombre" : "Equipos de sonido",
            "articulos" : objetosSonido
        },
        {
            "nombre" : "Cc Tv",
            "articulos" : objetosCcTv
        },
        {
            "nombre" : "Computadoras portátiles",
            "articulos" : objetosNote
        },
        {
            "nombre" : "Monitores",
            "articulos" : objetosMonit
        },
        {
            "nombre" : "Conectividad",
            "articulos" : objetosConect
        },
        {
            "nombre" : "Almacenamiento",
            "articulos" : objetosAlmacen
        },
        {
            "nombre" : "Tintas",
            "articulos" : objetosTintas
        },
        {
            "nombre" : "Accesorios",
            "articulos" : objetosAcces
        },
    ]

    //Componente Madre
    return (
        <div>
            <ProdPrincipal/>
            <div className="productos-container">
                <Title titleText="Productos"/>
                <div className="stock-container">
                    <select className="form-select" name="categorias" id="selCategorias" onClick={handlerCargarArticulos}>
                        {
                            categorias.map((item, i)=>(
                                <option value={i} key={i}>{item.nombre}</option>
                            ))
                        }
                        
                    </select>
                    <div className="tabla-productos">
                    {
                        categorias[idArticulos].articulos.map((item,i)=>(
                            <Producto
                                key={i}
                                imagen={item.imagen}
                                nombre={item.nombre}
                                descripcion={item.descripcion}
                                precio={item.precio}
                            />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;


db.collection("inventario").add({
    descripcion: "Accesorios",
    estado: true,
    imagen: pcGamer,
    nombre: "Accesorio",
    precio: "10.000",
    tipo: "accesorio"
})