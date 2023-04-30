import React from "react";
import "./collection.css"

export default function Collection(props){
   
    return(
        <div className="collection-item">
            <img src={props.image} alt="collection item" className="image"/>
            <p>{props.name}</p>
        </div>
    )
}