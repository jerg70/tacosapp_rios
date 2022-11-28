import React, {useEffect, useState} from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../../services/firebaseConfig";
import { PacmanLoader } from "react-spinners";

const ItemListContainer = (props) => {


    const [info, setInfo] = useState([]);

    const {categoryId} = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const ref = categoryId ? query (collectionProd, where('category', '==', categoryId))
        : collectionProd;

        getDocs(ref)
            .then((res) => {
                const tacos = res.docs.map((prod)=> {
                    return{
                        id: prod.id,
                        ...prod.data(),
                    };
                })
                    setInfo(tacos);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
            return () => setLoading(true);
    },[categoryId]); 

    if (loading) {
        return (
                <div className="containerLoading text-center">
                    <PacmanLoader color="#e68405" size={35}/>
                </div>      
        );
    }

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