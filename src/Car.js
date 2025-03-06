import React, { useState } from "react";
import "./Car.css";

const Car = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="car-page">
      {/* Navbar */}
      <nav className="car-navbar">
        <h1>Car Project</h1>
      </nav>

      {/* Main Content */}
      <div className="car-content">
        <h2>Welcome to My Car Project</h2>
        <p>Click the arrow to reveal more details.</p>
      </div>

      {/* Slide-out Button */}
      <button className="slide-button" onClick={togglePanel}>
        {isOpen ? "×" : "→"}
      </button>

      {/* Slide-out Panel */}
      <div className={`slide-panel ${isOpen ? "open" : ""}`}>
        <h2>More Information</h2>
        <p>This is a hidden panel that slides in when you click the button.</p>
        <p>You can put anything here like project details, images, etc.</p>
      </div>
    </div>
  );
};

export default Car;
