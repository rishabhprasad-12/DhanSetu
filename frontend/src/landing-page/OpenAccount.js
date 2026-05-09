import React from "react";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1>Open a DhanSetu Account</h1>
        <p>
          Modern platforms and apps, &#8377;0 investments, and &#8377;20
          intraday F&O trades.
        </p>
        <Link to="/signup">
          <button
            className="p-2 mt-3 btn mb-5"
            style={{
              width: "25%",
              margin: "0 auto",
              backgroundColor: "#1e81b0",
              color: "white",
            }}
          >
            SignUp Now
          </button>
        </Link>
      </div>
    </div>
  );
}
