import React, {useEffect, useState} from "react";
import ItemList from "../itemList/ItemList";
import { tacos } from "../mock/tacos";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {


    const [info, setInfo] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const getInfo = new Promise (resolve => {
            setTimeout(() => {
                resolve(tacos);
            },2000);
        });
        if (categoryId) {
            getInfo.then(res => setInfo(res.filter(taco => taco.category === categoryId)));

        }else{
            getInfo.then(res => setInfo(res));
        }
    },[categoryId]);

    return(
        <div>
            <h2 className="display-1 text-center">{props.titulo}</h2>
            <h3 className="display-4 text-center">{props.slogan}</h3>
            <hr />  
            <div className="container">
                <div className="row">
                    <ItemList info={info} />
                </div>
            </div>
        </div>

        
    )
}

export default ItemListContainer;