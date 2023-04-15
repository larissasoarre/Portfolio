import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import tetherLogo from '../images/tether-icon.png'

const TopCurrencies = () => {
    return (
        <div id="top-currencies" className="currencies-container">
            <div className="left-align">
                <h2>Top Cryptocurrencies</h2>
                <div className="content-box">
                    <div className="top-3">
                        <div className="icon-logo-container"><img src={tetherLogo} id="tether-icon" alt="Tether Icon" /></div>
                        <p>Tether</p>
                        <h3 id="tether-mob">USD 1.02</h3>
                        <h5>(+0.01%)</h5>
                    </div>
                    <div className="top-3">
                        <div className="icon-logo-container"><FontAwesomeIcon id="ethereum-icon" icon={faEthereum} /></div>
                        <p>Ethereum</p>
                        <h3>USD 1.332,62</h3>
                        <h5>(+0.7%)</h5>
                    </div>

                    <div className="top-1">
                        <h2>01.</h2>
                        <div className="bitcoin-logo-container"><FontAwesomeIcon id="bitcoin-icon" icon={faBitcoin} /></div>
                        <p>Bitcoin</p>
                        <h3>USD 19.003,10</h3>
                        <h5>(+1.09%)</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopCurrencies;