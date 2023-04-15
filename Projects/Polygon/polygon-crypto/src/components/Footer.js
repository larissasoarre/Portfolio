import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
  return (
    <BrowserRouter>
      <div className="footer">

        <div className="navbar footer">
          <div className="poly-1">
            <div className="poly-2"></div>
          </div>

          <p>Polygon</p>
        </div>

        <div className="menu-items">
          <Link to="#header" smooth>Home</Link>
          <Link to="#top-currencies" smooth>Top Cryptocurrencies</Link>
          <Link to="#hcurrency-converter" smooth>Converter</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Footer;