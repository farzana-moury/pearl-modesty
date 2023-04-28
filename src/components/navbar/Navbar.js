import React from "react";
import './navbar.css';
import { Link } from '@reach/router';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-menu'>
                    <div id='logo'>
                        <li>
                            <Link to='/'>PEARL MODESTY</Link>
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
                            <Link to=''><span role="img" aria-label="magnifying glass icon as search button">🔍</span></Link>
                        </li>
                        <li>
                            <Link to=''><span role="img" aria-label="shopping cart icon as cart button">🛒</span></Link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}
