import React from 'react';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import TopCurrencies from './components/TopCurrencies';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

const App = () => {
  return (
    
    <div className="container">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Polygon Crypto</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

      <div className="glass-container">
        <div className="page-content">
        <Header />
        <TopCurrencies />
        <CurrencyConverter />
        <Footer />
        </div>
      </div>

      <h1 className="letters P">P</h1>
      <h1 className="letters G">G</h1>
      <h1 className="letters N">N</h1>

      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
    </div>
  );
}

export default App;