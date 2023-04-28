import React from "react";
import "./collection.css"

export default function Collection(props){
   
    return(
        <div className='collection'>
            <img src={props.image} alt="collection" className="image"/>
            <p>{props.name}</p>
        </div>
    )
}