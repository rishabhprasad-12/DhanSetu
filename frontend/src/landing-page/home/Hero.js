import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero_Image"
          className="mb-5"
        />

        <h1>Invest In Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds & more
        </p>
        <Link to="signup">
          <button
            className="p-2 mt-3 btn mb-5"
            style={{
              width: "25%",
              margin: "0 auto",
              backgroundColor: "#1e81b0",
              color: "white"
            }}
          >
            SignUp Now
          </button>
        </Link>
      </div>
    </div>
  );
}
