import React from 'react'
import img from '../images/purple-image.jpg'

const Header = () => {
  return (
    <div id="header" className="header">

      <nav className="navbar">
        <div className="poly-1">
          <div className="poly-2"></div>
        </div>

        <p>Polygon</p>
      </nav>

      <div className="hero-1">
        <img className="hero-image" src={img} alt="" />
        <div className="hero-quote">
          <h2>A trusted and secure crypto exchange</h2>

          <p>Your guide to the world of the cryptocurrency. Get started with the easiest platform to track and convert crypto</p>

          <div className="button header">Get Started</div>
          </div>
      </div>
    </div>

  );
}
export default Header;