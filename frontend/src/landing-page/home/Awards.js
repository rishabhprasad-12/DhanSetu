import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mb-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 p-5 mb-5">
          <h1 className="mt-4">Largest Stock Broker In India</h1>
          <p className="mb-5">
            2+ millions DhanSetu clients contribute to over 15% of all retail
            order volumes in India daily by trending & investing in:
          </p>
          <div className="row">
            <div className="col-6 mb-4">
              <ul className="small">
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Commodity Derivatives</p>
                </li>
                <li>
                  <p>Current Derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="small">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="pressLogos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}
