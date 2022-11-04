import ItemCount from "../itemCount/ItemCount";
import React from "react";

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) =>{
        console.log("Compraste " +cantidad+ " unidades");
    }

    return(
        <div className="col-lg-3 col-md-6 col-sm-12 card tacoIndividual text-center" style={{width: '18rem'}}>
        <img src={item.pictureurl} className="card-img-top" alt={item.title}/>
        <div className="card-body">
            <h2>{item.title}</h2>
            <p className="card-text">{item.description}</p>
            <h3>${item.price}</h3>

            <ItemCount numInit={1} stock={10} onAdd={onAdd}/>
        </div>
        </div>
    );
}

export default ItemDetail;