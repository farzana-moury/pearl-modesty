import React from "react";
import './new.css';

export default function New(props) {
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
        <div className="new">
            <h1><strong>NEW ARRIVALS</strong></h1>
            {newArrivalsList}
        </div>
    )
}

const Item = (props) => {
    return(
        <div className="shop-item">
            <img src={props.image} alt="shopping item" className="image"/>
            <p>{props.name}</p>
            <p id="price">${props.price} CAD</p>
        </div>
    )
}