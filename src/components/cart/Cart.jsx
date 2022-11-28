import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const Cart = () => {
    const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext); //cart = []

    if (cart.length === 0)
        return (
            <h1>
                Aún no hay productos, por favor vuelve a <Link to="/">Home</Link>
            </h1>
        );

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 card tacoIndividual text-center" style={{width: '18rem'}}>
                    <img src={item.pictureurl} alt={item.title} className="card-img-top"/>
                    <div className="card-body">
                        <h3>{item.title}</h3>
                        <h3>{item.cantidad}</h3>
                        <button onClick={() => deleteOne(item.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
            <div className="card text-center">
                <div className="card-body">
                    <h2 className='card-text'>Total: {totalPrecio()}$</h2>
                    <button onClick={deleteAll} className="card-text">Vaciar carrito</button>
                    <Link to="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;