import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="container">
      <div className="row pt-5 mt-4">
        <h1 className="fs-2 text-center fw-semibold">
          About
        </h1>
      </div>

      <div
        className="row text-muted items-align-center"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/aboutSection.jpeg"
            alt="about-dhansetu"
            style={{
              borderRadius: "20px",
              width: "65%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          />

          <div className="p-3">
            <h5>DhanSetu Development</h5>
            <p>Finance • Technology • Innovation</p>
          </div>
        </div>

        <div className="col-6 p-5">
          <p>
            DhanSetu started as an idea to create a modern and intuitive trading
            platform that feels simple, fast, and accessible.
          </p>

          <p>
            Designed and developed with a passion for technology and finance,
            the platform focuses on delivering a seamless investing experience
            for the next generation of traders and investors.
          </p>

          <p>
            From authentication systems to portfolio tracking and real-time
            order management, every feature is carefully crafted to combine
            performance, usability, and modern design.
          </p>

          <p>
            More than just a project, DhanSetu represents continuous learning,
            innovation, and the journey of turning ideas into impactful
            products.
          </p>

          <p>
            Connect on <Link to="/">Homepage</Link> /{" "}
            <Link to="Q&A">TradingQnA</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
