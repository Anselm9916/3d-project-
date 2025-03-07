/* global TimelineMax, Power2 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import './Car.css';

const Car = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const logo = document.querySelector(".logo");
    const headline = document.querySelector(".headline");

    const tl = new window.TimelineMax();

    tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
      .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
      .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
      .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
  }, []);

  return (
    <div className="car-page">
      <header>
        <nav>
          <h3 className="logo">Animatie</h3>
        </nav>
        <section>
          <div className="hero">
            <img src="iris.jpg" alt="Iris" />
            <h1 className="headline">dream big</h1>
          </div>
        </section>
      </header>
      <div className="slider"></div>
      <Link to="/">
        <button className="cta-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Car;
