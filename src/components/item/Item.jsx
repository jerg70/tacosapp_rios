import React from 'react';
import { Link } from "react-router-dom";

const Item = ({info}) =>{
    return(
    <div className="col-lg-3 col-md-6 col-sm-12 card taco">
        <img className="card-img-top" src={info.pictureurl} alt="Imagen de taco"/>
        <div className="card-body text-center">
            <h5 className="card-title">{info.title}</h5>
            <p className="card-text">{info.description}</p>
            <p className="card-text precioLetra">${info.price}</p>
            <Link to={`/item/${info.id}`} className="btn btn-primary mx-auto" >Detalle del Producto</Link>
        </div>
    </div>
    );
}

export default Item;
