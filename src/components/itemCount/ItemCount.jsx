import useState from "react";


const ItemCount = ({numInit = 1,stock,onAdd})=> {
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

    const agregar = () => {
        onAdd(count);
    };


    return(
        <div className="contador">
            <button disabled={count<=0} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count>=stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <= 0 || count <= 0} onClick={agregar}>Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;