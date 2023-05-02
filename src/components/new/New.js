import React from "react";
import './new.css';
import { useState } from "react";

export default function New(props) {
    const [isViewing, setViewing] = useState(false);
    const [currentItem, setCurrentItem] = useState();

    const Item = (props) => {
        return (
            <div className="shop-item">
                <img src={props.image} alt="shopping item" className="image" onClick={() => shoppingItemClicked(props) }  />
                <p>{props.name}</p>
                <p id="price">${props.price} CAD</p>
            </div>
        )
    }

    const ViewItem = (props) => {
        return(
            <div onClick={() => setViewing(false)}>
                {props.item.name}
                <img src={props.item.image}></img>
            </div>
        )
    }

    function shoppingItemClicked(item){
        setViewing(true);
        setCurrentItem(item);
    }

    const newArrivalsList = props.arrivals.map((arrival) =>
        <Item
            key={arrival.id}
            id={arrival.id}
            name={arrival.name}
            image={arrival.image}
            price={arrival.price}
        />
    )

    return (
        isViewing ?
        <ViewItem item={currentItem}/>
        :
        <div className="new">
            <h1><strong>NEW ARRIVALS</strong></h1>
            {newArrivalsList}
        </div>
    )

}