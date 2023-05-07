import Header from "../header/Header";
import React from "react";
import "./home.css";
import ramadan from "../../images/ramadan.png";
import pearlCollection from "../../images/pearl-collection.jpg";
import muslimWomen from "../../images/muslim-women.jpg";
import useExternalScripts from "../../hooks/useExternalScripts";

export default function Home() {
    useExternalScripts("../../scripts/adSlider.js");
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
            <div className="slide active">
                <img src={ramadan} />
                <div className='textbox'>
                    <h1>RAMADAN SALE</h1>
                    <h2>2 &nbsp; 0 &nbsp; 2 &nbsp; 3</h2>
                    <h3>a l l &nbsp;&nbsp; p r o d u c t s &nbsp;&nbsp; n o w &nbsp;&nbsp;5 0 % &nbsp;&nbsp; o f f</h3>
                    <button> S H O P </button>
                </div>
            </div>
            <div className="slide">
                <img src={pearlCollection} />
                <div className='textbox'>
                    <h1>SHOP PEARL COLLECTION</h1>
                    <button> S H O P </button>
                </div>
            </div>
            <div className="slide">
                <img src={muslimWomen} />
                <div className='textbox'>
                    <h1>30% OFF HIJAB SALE</h1>
                    <button> S H O P </button>
                </div>
            </div>
            <div className="navigation">
                <div className="btn active"></div>
                <div className="btn"></div>
                <div className="btn"></div>
            </div>
        </div>
    )
}