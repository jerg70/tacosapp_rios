import React, {useState, useEffect} from "react";


const ItemCount = ({numInit,stock,onAdd})=> {
    const[count,setCount] = useState(parseInt(numInit));

    const decrementar = () =>{
        if(count > 0){
            setCount(count - 1);
        }
        else{
            setCount(0);
        }
        
    }

    const incrementar = () =>{
            setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(numInit));
    },[numInit])

    return(
        <div className="contador">
            <button disabled={count<=0} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count>=stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <= 0 || count <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;