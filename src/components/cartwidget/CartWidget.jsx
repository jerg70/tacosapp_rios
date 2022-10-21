import React, { Component } from "react";

class CartWidget extends Component{
    render()
    {
        return (
            <a href="/">
            <img src="cartwidget_Icon.png" alt="CWI" className="navbar-brand cartWidgetIcon justify-content-end"/>
            </a>
        )
    }
}

export default CartWidget;