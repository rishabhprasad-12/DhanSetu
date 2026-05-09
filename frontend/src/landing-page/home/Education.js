import React from "react";

export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mb-5">
          <img
            src="media/images/education.svg"
            alt="educationImage"
            style={{ width: "85%" }}
          />
        </div>
        <div className="col-6 mb-5">
          <h2 className="mb-3">Free and open market education</h2>
          <div>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from basics to advanced trading.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              Varsity
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>
          <div className="mt-3">
            <p>
              TradingQ&A, the most active trading and investing community in
              India for all your market related queries.
            </p>
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
