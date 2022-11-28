import React from "react";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const { totalUnidades } = useContext(CartContext);

    return (
        <div className="carritoDiv text-left">
        <input type="image" name="CartWidget"src="cartwidget_Icon.png" alt="CWI" className="navbar-brand cartWidgetIcon"/>
        <span className="cartWidgetNumero">{totalUnidades() !== 0 && totalUnidades()}</span>
        </div>
    );
};
export default CartWidget;


