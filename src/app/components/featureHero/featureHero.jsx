import "./featureHero.css"
import {Link } from "react-router-dom"


export default function FeatureHero() {
    return (
       <>
        <section className="home-hero">
            <div className="hero-glow"></div>
            <div className="hero-content">
                <div className="hero-badge">FEATURES</div>
                <h1 className="hero-title">
                    <span>Everything you need.</span>
                    <span className="highlight">Nothing you don't.</span>
                </h1>
                <p className="hero-subtitle">   Experience a financial app built for modern life. Fully encrypted secure chat, painless payments, unified savings circles, and instantly liquid crypto accounts.       </p>
                <div className="hero-buttons">
                <Link to="/EarlyAccess" className="btn-affiliate"> Get Early Access</Link>
                <Link to="/watchdemo" className="btn-waitlist">Watch Live Demo</Link>
                </div>
            </div>

        </section>

       </>
    )
}