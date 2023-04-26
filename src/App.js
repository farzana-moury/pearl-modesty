import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import New from './components/new/New';
import Shop from './components/shop/Shop';
import AboutUs from './components/about us/AboutUs';
import { Router } from '@reach/router';
import { render } from '@testing-library/react';

function App(props) {
  
  return (
    <Navbar />
  );
}

render(
  <Router>
    <Home path='/' />
    <New path='new' />
    <Shop path='shop' />
    <AboutUs path='about-us' />
  </Router>
)
export default App;
