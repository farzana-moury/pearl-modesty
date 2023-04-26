import React from "react";
import './navbar.css';
import Home from '../home/Home';
import New from '../new/New';
import Shop from '../shop/Shop';
import AboutUs from '../about us/AboutUs';
import { Router, Link } from '@reach/router';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-menu'>
                    <div id='logo'>
                        <li>
                            <a href=''>PEARL MODESTY</a>
                        </li>
                    </div>
                    <div id='menu'>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='new'>new</Link>
                        </li>
                        <li>
                            <Link to='shop'>shop</Link>
                        </li>
                        <li>
                            <Link to='about-us'>about us</Link>
                        </li>
                    </div>
                    <div id='icons'>
                        <li>
                            <a href=''>🔍</a>
                        </li>
                        <li>
                            <a href=''>🛒</a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}
