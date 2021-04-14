import React, {useState, useEffect, Suspense, lazy} from 'react';
import './product.css';
import {db, storage} from '../../fire_config';

import imagenes from '../../assets/product/imagenes'
import Title from '../1-microComponents/title/Title'
import Producto from './producto/Producto';

const Banner = lazy(()=>import('./banner/Banner'));


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
        getObjetos("tipo","cctv", setObjetosCcTv)
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
            <Suspense fallback={<h1>cargando...</h1>}>
                <Banner/>
            </Suspense>
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
                        categorias[idArticulos].articulos.map((item,i)=>
                        (
                            <Producto
                                key={i}
                                imagen={item.image}
                                nombre={item.name}
                                descripcion={item.description}
                                precio={item.price}
                                
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