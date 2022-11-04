import React, {useEffect, useState} from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { tacos } from "../mock/tacos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});
    const {itemId} = useParams();

            useEffect(() => {
                const getProduct = new Promise (resolve => {
                    setTimeout(() => {
                        resolve(tacos);
                    },2000);
                });
                getProduct.then(info => setItem(info.find(taco => taco.id === parseInt(itemId))));
            },[]);

    return(
        <div className="text-center">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;