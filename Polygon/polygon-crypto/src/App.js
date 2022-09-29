import React from 'react'
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import TopCurrencies from './components/TopCurrencies';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <div className="glass-container">
        <Header />
        <TopCurrencies />
        <CurrencyConverter />
        <Footer />
      </div>

      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
    </div>
  );
}

export default App;