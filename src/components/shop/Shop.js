import './shop.css';
import React from "react";
import Collection from '../collection/Collection';

export default function Shop(props){
    const collectionsList = props.collections.map((collection) => 
    <Collection 
      key={collection.id}
      id={collection.id}
      name={collection.name}
      image={collection.image}
    />);

    return(
        <div className='shop'>
            <h1><strong>SHOP</strong></h1>
            <div className='collection-div'>
            {collectionsList}
            </div>
        </div>
    );
}