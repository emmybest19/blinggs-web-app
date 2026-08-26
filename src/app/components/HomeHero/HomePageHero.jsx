import React from 'react';
import './HomePageHero.css';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';


export default function HomePageHero() {
  return (
    <section className="home-hero">
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-badge">
          NOW IN PRIVATE BETA
        </div>
        <h1 className="hero-title">
          <span>Message. Pay.</span>
          <span className="highlight">Grow Together.</span>
        </h1>
        <p className="hero-subtitle">
          The all-in-one super app that combines secure messaging with powerful financial tools. 
          Send money, manage group savings, and trade crypto — seamlessly.
        </p>
        <div className="hero-buttons">
          <Link to="/waitlist" className="btn-affiliate"> Join Waitlist</Link>
          <Link to="/affiliate" className="btn-waitlist">Our Affiliate Program</Link>
        </div>
      </div>
    </section>
  );
}