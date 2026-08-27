import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import blinggLogo from '../../assets/blingg-logo.png'
import Button from "../Button/Button.jsx"
import { useState } from "react";


// export default function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="nav-left">
//                 <Link to="/" className="brand">
//                     <img src={blinggLogo} alt="Blingg Logo" className="nav-logo"/>
//                     <span>Blingg</span>
//                 </Link>
//             </div>
//             <div className="nav-main">
//                 <ul>
//                     <li><Link to="/features">Features</Link></li>
//                     <li><Link to="/how-it-works">How it works</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/faq">FAQ</Link></li>
//                 </ul>
//             </div>
//             <div className="nav-right">
//                 <Button />
//             </div>

//         </nav>
//     )
// }

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="brand" onClick={closeMenu}>
                    <img src={blinggLogo} alt="Blingg Logo" className="nav-logo"/>
                    <span>Blingg</span>
                </Link>
            </div>
            <div className={`nav-main ${menuOpen ? "nav-open" : ""}`}>
                <div className="mobile-menu-brand">
                    <Link to="/" className="mobile-brand" onClick={closeMenu}>
                        <img src={blinggLogo} alt="Blingg Logo" className="mobile-nav-logo"/>
                        <span>Blingg</span>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
                    <li><Link to="/how-it-works" onClick={closeMenu}>How it works</Link></li>
                    <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Button />
            </div>
            <div  className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}