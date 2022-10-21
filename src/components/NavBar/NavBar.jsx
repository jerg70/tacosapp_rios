import React from "react";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return(
      <header className="row">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-lg-12 col-md-12 col-sm-12">

          <div className="container-fluid">
          <a href="/">{/* index */}
                    <img src="../../media/taqueria_Logo.png" alt="Tacos Regios Logo" className="navbar-brand logoTacos"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nosotrosLink" href="/">Nosotros</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menú
                  </a>
                  <ul className="dropdown-menu bg-dark text-white">
                    <li className="hoverSubMenu"><a className="dropdown-item text-white" href="/">Tacos de Maíz</a></li>
                    <li className="hoverSubMenu"><a className="dropdown-item text-white" href="/">Tacos de Harina</a></li>
                  </ul>
                </li>
              </ul>
              <a className="nav__link" href="/"><CartWidget/></a>
            </div>

          </div>
        </nav>
      </header>
    )
}

export default NavBar;