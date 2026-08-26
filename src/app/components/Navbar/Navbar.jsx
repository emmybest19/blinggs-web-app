import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import blinggLogo from '../../assets/blingg-logo.png'
import Button from "../Button/Button.jsx"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="brand">
                    <img src={blinggLogo} alt="Blingg Logo" className="nav-logo"/>
                    <span>Blingg</span>
                </Link>
            </div>
            <div className="nav-main">
                <ul>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/how-it-works">How it works</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Button />
            </div>

        </nav>
    )
}