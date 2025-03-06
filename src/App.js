import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import AppleProject from './AppleProject';
import Car from './Car'; // Ensure this file exists
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="container">
      {/* Only render the home navbar if we're NOT on /apple-project or /car */}
      {location.pathname !== '/apple-project' && location.pathname !== '/car' && (
        <nav className="navbar">
          <h1>3D Experience</h1>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple-project" element={<AppleProject />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </div>
  );
}

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
          Experience the next generation of web design with immersive 3D models. 
          Enhance user engagement and bring your ideas to life with real-time interactive elements.
        </p>
      </div>

      {/* Left-side Text with Dropdown Button */}
      <div className="left-text-container">
        <h1>Experimenting with 3D Models</h1>
        <p>
          I’m currently exploring 3D design and integrating interactive 3D models into websites. 
          It's an exciting way to create engaging user experiences.
        </p>
        <Dropdown />
      </div>
    </div>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="cta-button dropdown-toggle" onClick={toggleDropdown}>
        My 3D Projects
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/apple-project">
            <button className="cta-button dropdown-item">My Apple Project</button>
          </Link>
          <Link to="/car">
            <button className="cta-button dropdown-item">My Car Project</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
