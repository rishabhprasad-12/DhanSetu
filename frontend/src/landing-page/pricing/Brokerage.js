import React from "react";

export default function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <hr />
        <div className="col-7 p-4">
          <a href="" className="text-decoration-none text-center">
            <h3 className="fs-6">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-4">
          <a href="" className="text-decoration-none text-center">
            <h3 className="fs-6">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
