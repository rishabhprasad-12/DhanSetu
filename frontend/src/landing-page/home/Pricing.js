import React from "react";

export default function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT SECTION */}
        <div className="col-4 mb-5">
          <h2 className="mb-3">Unbeatable Pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            of India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>
        <div className="col-2"></div>

        {/* RIGHT SECTION */}
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-4">&#8377;0</h1>
              <p>Free equity delivery and direct mutual fund</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-4">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
