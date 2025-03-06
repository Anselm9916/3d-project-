import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import './AppleProject.css';

function AppleProject() {
  const [selectedColor, setSelectedColor] = useState('white');
  const splineRef = useRef(null);

  // iPhone color variants
  const colorScenes = {
    white: 'https://prod.spline.design/On5jVhh3G3hlX2Cz/scene.splinecode',
    black: 'https://prod.spline.design/vpCbbqFErDaCbxov/scene.splinecode',
    gold: 'https://prod.spline.design/IyhlJl8d8MLhjvpl/scene.splinecode',
    blue: 'https://prod.spline.design/TWo0bxY7EXIvBxif/scene.splinecode',
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="apple-project-wrapper">
      {/* The 3D iPhone model */}
      <div className="spline-container">
        <Spline 
          scene={colorScenes[selectedColor]} 
          onLoad={(spline) => {
            splineRef.current = spline;
          }}
        />
      </div>

      {/* Apple Project Title */}
      <h1 className="apple-title">Apple 3D Project</h1>

      <p className="apple-text">This project is my personal take on a section of Apple's website, where I experiment with integrating interactive 3D models into web design. By using Spline, I bring a dynamic and immersive experience to the page, allowing users to explore different iPhone color variations in real-time.</p>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="cta-button">Back to Home</button>
      </Link>

      {/* Color Selection Buttons */}
      <div className="color-selector">
        {Object.keys(colorScenes).map((color) => (
          <button
            key={color}
            className={`color-button ${color} ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default AppleProject;
