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
            <div  className="view-item">
                <div id="image">
                    <img src={props.item.image} alt="individual shopping item" onClick={() => setViewing(false)}></img>
                </div>
                <div id="details">
                    <p id="heading">{props.item.name}</p>
                    <p id="price">${props.item.price} CAD</p>
                    <p className="label">DESCRIPTION</p>
                    <p id="description">lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum 
                    dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                    <p className="label">SIZE</p>
                    <div className="size-selection-list">
                        <div className="block-button">
                            <input className="hidden" type="radio" id="small" name="size-button" value="SMALL" />
                            <label htmlFor="small" className="size-button">S</label>

                            <input className="hidden" type="radio" id="medium" name="size-button" value="MEDIUM" />
                            <label htmlFor="medium" className="size-button">M</label>

                            <input className="hidden" type="radio" id="large" name="size-button" value="LARGE" />
                            <label htmlFor="large" className="size-button">L</label>
                        </div>
                    </div>
                    <button>A D D &nbsp;&nbsp; T O &nbsp;&nbsp; C A R T</button>
                </div>
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