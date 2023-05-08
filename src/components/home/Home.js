import Header from "../header/Header";
import React from "react";
import "./home.css";
import ramadan from "../../images/ramadan.png";
import pearlCollection from "../../images/pearl-collection.jpg";
import muslimWomen from "../../images/muslim-women.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
            <AliceCarousel autoPlay autoPlayInterval={3000}>
            <div className="sliderimg">
                <img src={ramadan} />
                <div className='textbox'>
                    <h1>RAMADAN SALE</h1>
                    <h2>2 &nbsp; 0 &nbsp; 2 &nbsp; 3</h2>
                    <h3>a l l &nbsp;&nbsp; p r o d u c t s &nbsp;&nbsp; n o w &nbsp;&nbsp;5 0 % &nbsp;&nbsp; o f f</h3>
                    <button> S H O P </button>
                </div>
            </div>
            <div className="sliderimg">
                <img src={pearlCollection} />
                <div className='textbox'>
                    <h1>SHOP PEARL COLLECTION</h1>
                    <button> S H O P </button>
                </div>
            </div>
            <div className="sliderimg">
                <img src={muslimWomen} />
                <div className='textbox'>
                    <h1>30% OFF HIJAB SALE</h1>
                    <button> S H O P </button>
                </div>
            </div>
            </AliceCarousel>
        </div>
        // <AliceCarousel autoPlay={true} autoPlayInterval={3000}>
        //     <div className="sliderimg">
        //         <img src={ramadan} />
        //         <div className='textbox'>
        //             <h1>RAMADAN SALE</h1>
        //             <h2>2 &nbsp; 0 &nbsp; 2 &nbsp; 3</h2>
        //             <h3>a l l &nbsp;&nbsp; p r o d u c t s &nbsp;&nbsp; n o w &nbsp;&nbsp;5 0 % &nbsp;&nbsp; o f f</h3>
        //             <button> S H O P </button>
        //         </div>
        //     </div>
        //     <div className="sliderimg">
        //         <img src={pearlCollection} />
        //         <div className='textbox'>
        //             <h1>SHOP PEARL COLLECTION</h1>
        //             <button> S H O P </button>
        //         </div>
        //     </div>
        //     <div className="sliderimg">
        //         <img src={muslimWomen} />
        //         <div className='textbox'>
        //             <h1>30% OFF HIJAB SALE</h1>
        //             <button> S H O P </button>
        //         </div>
        //     </div>
        // </AliceCarousel>
    )
}