import React, {useEffect, useState} from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { collectionProd } from "../../services/firebaseConfig";
import { PacmanLoader } from "react-spinners";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);

            useEffect(() => {

                const ref = doc(collectionProd, itemId);

                getDoc(ref)
                .then((res)=>{
                    setItem({
                        id:res.id,
                        ...res.data(),
                    });
                })
                .catch((error)=>{
                    console.log(error);
                })
                .finally(()=>{
                    setLoading(false);
                })
                return () => setLoading(true);
            },[]);

            if (loading) {
                return (
                        <div className="containerLoading text-center">
                            <PacmanLoader color="#e68405" size={35}/>
                        </div>      
                );
            }
    return(
        <div className="text-center">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;