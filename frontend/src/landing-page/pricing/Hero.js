import React from "react";

export default function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center p-5">
        <h1>Pricing</h1>
        <h6 className="text-muted p-3">
          Free equity investments and flat ₹20 traday and F&O trades{" "}
        </h6>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="small">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="small">
            {" "}
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="small">
            {" "}
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
