import React from 'react';
import './Awards.css';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Stock Broker"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="mb-4 text-center text-md-start">Largest stock broker in India</h1>
          <p className="fs-5 mb-4 text-center text-md-start">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
