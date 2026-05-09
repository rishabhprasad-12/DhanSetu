import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="container">
      <div className="row pt-5 mt-4">
        <h1 className="fs-2 text-center fw-semibold">People</h1>
      </div>

      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="founderImage"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <div className="p-3">
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6 p-5">
          <p>
            Nitin bootstrapped and founded DhanSetu in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            DhanSetu has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/">Homepage</Link> /{" "}
            <Link to="Q&A">TradingQnA</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
