import React from "react";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const { totalUnidades } = useContext(CartContext);

    return (
        //<div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/">
        <img src="cartwidget_Icon.png" alt="CWI" className="navbar-brand cartWidgetIcon justify-content-end"/>
        <span className="cartWidgetNumero">{totalUnidades() !== 0 && totalUnidades()}</span>
        </a>
        //<span>{totalUnidades() !== 0 && totalUnidades()}</span>
         //</div>
    );
};
export default CartWidget;


