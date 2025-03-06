import React from 'react';
import './Car.css'; // Important: keep the same filename

const Car = () => {
  return (
    <div className="car-page">
      {/* Transparent Navbar (scoped to .car-page) */}
      {/* <nav className="car-navbar">
        <div className="navbar-logo">
          <a href="#">Logo</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> */}

      {/* Content Section */}
      <div className="car-content">
        <h1>Welcome to My Page</h1>
        <p>Scroll down to see the fixed background image!</p>
        <p>Keep scrolling... <strong>the background will stay fixed!</strong></p>

        {/* Spacer to enable scrolling */}
        <div style={{ height: '1500px' }}>
          <p>More content to scroll...</p>
        </div>
      </div>
    </div>
  );
};

export default Car;
