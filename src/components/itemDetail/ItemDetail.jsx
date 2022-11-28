import ItemCount from "../itemCount/ItemCount";
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";


const ItemDetail = ({item}) => {

    const [show, setShow] = useState(true);

    const { addToCart, cantidadDeProducto } = useContext(CartContext);

    const onAdd = (cantidad) =>{
        setShow(false);
        addToCart(item, cantidad);
    }

    const totalCantidad = cantidadDeProducto(item.id);


    return(
        <div className="col-lg-3 col-md-6 col-sm-12 card tacoIndividual text-center" style={{width: '18rem'}}>
        <img src={item.pictureurl} className="card-img-top" alt={item.title}/>
        <div className="card-body">
            <h2>{item.title}</h2>
            <p className="card-text">{item.description}</p>
            <h3>${item.price}</h3>

            {show ? (
            <ItemCount
                stock={item.stock}
                onAdd={onAdd}
                initial={totalCantidad}
            />
            ) : (

            <Link to="/cart">Ir al carrito</Link>
)}
        </div>
        </div>
    );
}

export default ItemDetail;