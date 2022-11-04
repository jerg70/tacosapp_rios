import Item from "../item/Item";
import React from "react";

const ItemList = ({info = []}) => {
    return(
        info.map(taco => <Item key={taco.id} info={taco} />)
    );
}

export default ItemList;