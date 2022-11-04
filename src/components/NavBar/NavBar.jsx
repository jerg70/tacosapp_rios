import React from "react";
import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
      <header className="row">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-lg-12 col-md-12 col-sm-12">

          <div className="container-fluid">
            <NavLink to='/'>
                    <img src="../../media/taqueria_Logo.png" alt="Tacos Regios Logo" className="navbar-brand logoTacos"/>
            </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nosotrosLink" to='/nosotros'>Nosotros</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menú
                  </NavLink>
                  <ul className="dropdown-menu bg-dark text-white">
                    <li className="hoverSubMenu"><NavLink className="dropdown-item text-white" to='/category/maiz'>Tacos de Maíz</NavLink></li>
                    <li className="hoverSubMenu"><NavLink className="dropdown-item text-white" to='/category/harina'>Tacos de Harina</NavLink></li>
                  </ul>
                </li>
              </ul>
              <NavLink className="nav__link" to='/cart'><CartWidget /></NavLink>
            </div>

          </div>
        </nav>
      </header>
    )
}

export default NavBar;