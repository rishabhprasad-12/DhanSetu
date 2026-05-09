import React from "react";
import { Link } from "react-router-dom";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5">The DhanSetu Universe</h1>
        <p className="mb-4">
          Extent your treading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="small text-muted p-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/StreakLogo.png" style={{ width: "40%" }} />
          <p className="small text-muted p-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/sensibullLogo.svg" style={{ width: "35%" }} />
          <p className="small text-muted p-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "45%" }}
          />
          <p className="small text-muted p-3">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/goldenpiLogo.png" />
          <p className="small text-muted p-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png" style={{ width: "25%" }} />
          <p className="small text-muted p-3">Insurance</p>
        </div>
        <Link to="/signup">
          <button
            className="btn mb-5"
            style={{ backgroundColor: "#1e81b0", color: "white" }}
          >
            SignUp Now
          </button>
        </Link>
      </div>
    </div>
  );
}
