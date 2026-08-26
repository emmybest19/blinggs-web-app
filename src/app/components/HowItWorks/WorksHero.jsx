import "./WorksHero.css"
import {Link } from "react-router-dom"







export default function WorksHero(){
    return(
        <section className="how-hero">
            <div className="how-hero-glow"></div>
            <div className="how-hero-content">
                <div className="how-hero-badge">EARLY ACCESS PROGRAM</div>
                    <h1 className="how-hero-title">
                        <span>Be the first to </span>
                        <span> experience <span className="how-highlight">Blingg</span></span>
                    </h1>
                    <p className="how-hero-subtitle">
                        Join 10,000+ people already on the waitlist. Get early access to the super app that combines messaging, payments, and group savings.
                    </p>
                    <div className="how-hero-buttons">
                        <input type="text" placeholder="Enter your email address......" className="how-input"/>
                        <Link to="/affiliate" className="How-waitlist">Join Waitlist</Link>
                    </div><br/>
                    <p>No spam. Unsucribe anytime.</p>
            </div>
        </section>
    )
}