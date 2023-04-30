import Header from "../header/Header";
import React from "react";
import "./home.css";

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Advert />
        </div>
    );
}

const Advert = () => {
    return (
        <div className='ad'>
            <div id='textbox'>
                <h1>RAMADAN SALE</h1>
                <h2>2 &nbsp; 0 &nbsp; 2 &nbsp; 3</h2>
                <h3>a l l &nbsp;&nbsp; p r o d u c t s &nbsp;&nbsp; n o w &nbsp;&nbsp;5 0 % &nbsp;&nbsp; o f f</h3>
                <button> S H O P </button>
            </div>
        </div>
    )
}