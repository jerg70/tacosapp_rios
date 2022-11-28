import React from "react";

const Nosotros = () => {
    return(
        <section className="row nosotros_Box">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <h1 className="col-lg-12 col-md-12 col-sm-12 text-center">¡Te sorprenderá nuestra Historia!</h1>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 videoDemo text-center">
                <iframe width="1260" height="560" src="https://www.youtube.com/embed/k2qist_IxZI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="col-lg-12 col-md-10 col-sm-12" alt="Video de Nuestra Historia"></iframe>
            </div>
        </section>
    )
}

export default Nosotros;
