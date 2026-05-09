import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mb-4 text-center">
        <h1 className="fs-2 fw-semibold pb-2">Technology</h1>
        <p className="fw-semibold text-muted">
          Sleek, modern and intuitive trading platforms.
        </p>
        <p className="small">
          Check out our{" "}
          <Link style={{ textDecoration: "none" }}>
            investment offerings
            <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </Link>
        </p>
      </div>
      <hr />
    </div>
  );
}
