import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'USD']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [setExchangeRate] = useState(null)
    const [result, setResult] = useState(null)

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                'X-RapidAPI-Key': '66c2a33349msh6ff097cb98558f9p1f8879jsn97032f0b1bbe',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div id="currency-converter" className="currency-converter">
            <h2>Currency Converter</h2>

            <div className="input-container">
                <div className="input-box">
                    <div className="currency-value">
                        <div>
                            <p>You Have</p>
                            <input
                            className="input-value"
                                type="number"
                                name="currency-amount-1"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>Currency</p>
                            <select
                                name="currency-option-1"
                                className="currency-options"
                                value={chosenPrimaryCurrency}
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}>
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </div>
                    </div>

                    <div className="currency-value">
                        <div>
                            <p>You Get</p>
                            <input 
                            className="input-value"
                                name="currency-amount-2"
                                value={result}
                                disabled="disabled"
                                onChange={(e) => setAmount(e.target.value)} />
                        </div>

                        <div>
                            <p>Currency</p>
                            <select
                                name="currency-option-2"
                                className="currency-options"
                                value={chosenSecondaryCurrency}
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}>
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="button" id="convert-button" onClick={convert}> <FontAwesomeIcon id="convert-icon" icon={faArrowRightArrowLeft} /></div>
                </div>

                {/* <div>
                <div id="convertion-result">{result}</div>
                <div id="exchange-rate">{exchangeRate}</div>
            </div> */}

            </div>




            );
}

            export default CurrencyConverter;