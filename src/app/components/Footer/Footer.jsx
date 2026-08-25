import React from "react";
import "./Footer.css";
import blinggLogo from "../../assets/blingg-logo.png";
import Twitter from "../../assets/twitter-footer.png"
import Instagram from "../../assets/instagram-footer.png"
import LinkedIn from "../../assets/linkedin-footer.png"
import Facebook from "../../assets/facebook-hero.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={blinggLogo}  alt="Blingg Logo"/>
                        <span>Blingg</span>
                    </div>
                    <p className="footer-description">
                        The all-in-one super app for messaging, payments,
                        and group contributions.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><img src={Twitter} alt="twitter"/></a>
                        <a href="#" className="social-icon"><img src={Instagram} alt="instagram"/></a>
                        <a href="#" className="social-icon"><img src={LinkedIn} alt="LinkedIn"/></a>
                        <a href="#" className="social-icon"><img src={Facebook} alt="facebook"/></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#download">Download</a>
                        <a href="#security">Security</a>
                    </div>
                    <div className="footer-column">
                        <h4>About Us</h4>
                        <a href="#about">About Us</a>
                        <a href="#blog">Blog</a>
                        <a href="#careers">Careers</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Zeta Technologies Ltd. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                    <a href="#status">Start Portal</a>
                </div>
            </div>
        </footer>
    );
}