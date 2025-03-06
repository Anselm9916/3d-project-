import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import AppleProject from './AppleProject'; // Make sure this file exists
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  // Get the current location (URL path)
  const location = useLocation();

  return (
    <div className="container">
      {/* Only render the navbar if we are NOT on the /apple-project page */}
      {location.pathname !== '/apple-project' && (
        <nav className="navbar">
          <h1>3D Experience</h1>
          
        </nav>
      )}

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple-project" element={<AppleProject />} />
      </Routes>
    </div>
  );
}

// Home Page Component
function Home() {
  return (
    <div>
      {/* 3D Model */}
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/c9t47iRUvVy1aX6n/scene.splinecode" />
      </div>

      {/* Text on the Right */}
      <div className="text-container">
        <h1>Explore Interactive 3D Models</h1>
        <p>
          Experience the next generation of web design with immersive 3D models. Enhance user engagement and bring your ideas to life with real-time interactive elements.
        </p>
      </div>

      {/* Left-side Text with Apple Project Button */}
      <div className="left-text-container">
        <h1>Experimenting with 3D Models</h1>
        <p>
          I’m currently exploring 3D design and integrating interactive 3D models into websites. It's an exciting way to create engaging user experiences.
        </p>
        <Link to="/apple-project">
          <button className="cta-button">My Apple Project</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
