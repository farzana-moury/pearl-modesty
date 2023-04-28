import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import New from './components/new/New';
import Shop from './components/shop/Shop';
import AboutUs from './components/about us/AboutUs';
import { Router } from '@reach/router';
import { render } from '@testing-library/react';
import React from 'react';
import { nanoid } from 'nanoid';
import abayas from "./images/abayas.png";
import dresses from "./images/dresses.png";
import niqabs from "./images/niqabs.png";
import hijabs from "./images/hijabs.png";
import looseWear from "./images/loose-wear.png";
import accessories from "./images/accessories.png";

const DATA = [
  { id: `collections-${nanoid()}`, name: "Abayas", image: abayas},
  { id: `collections-${nanoid()}`, name: "Dresses", image: dresses },
  { id: `collections-${nanoid()}`, name: "Niqabs", image: niqabs },
  { id: `collections-${nanoid()}`, name: "Hijabs", image: hijabs },
  { id: `collections-${nanoid()}`, name: "Loose Wear", image: looseWear },
  { id: `collections-${nanoid()}`, name: "Accessories", image: accessories }
];

function App() {
  return (
    <Navbar />
  );
}

render(
  <Router>
    <Home path='/' />
    <New path='new' />
    <Shop path='shop' collections={DATA}/>
    <AboutUs path='about-us' />
  </Router>
)
export default App;
