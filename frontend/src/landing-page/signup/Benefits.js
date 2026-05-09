import React from 'react'

export default function Benefits() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 mt-5 text-center mb-5">
          <img
            src="media/images/acop-benefits.svg"
            alt=""
            style={{ width: "65%" }}
          />
          <h3 className="mt-5 fs-4">
            Benefits of opening a Zerodha demat account
          </h3>
        </div>
        <div className="col-6 mb-5">
          <div className="mt-5">
            <h3 className="pb-3 fs-5">Unbeatable pricing</h3>
            <p className="pb-4 text-muted">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>

          <div>
            <h3 className="pb-3 fs-5">Best investing experience</h3>
            <p className="pb-4 text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>

          <div>
            <h3 className="pb-3 fs-5">No spam or gimmicks</h3>
            <p className="pb-4 text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>

          <div>
            <h3 className="pb-3 fs-5">The DhanSetu universe</h3>
            <p className="pb-4 text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
