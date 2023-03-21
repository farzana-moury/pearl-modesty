import React from "react";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-menu'>
                <div id='logo'>
                    <li>
                        <a href=''>PEARL MODESTY</a>
                    </li>
                </div>
                <div id='menu'>
                    <li>
                        <a href=''>home</a>
                    </li>
                    <li>
                        <a href=''>new</a>
                    </li>
                    <li>
                        <a href=''>shop</a>
                    </li>
                    <li>
                        <a href=''>about us</a>
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
    );
}