import React from "react";

export default function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* LEFT SECTION */}
        <div className="col-lg-6 col-md-12 mb-5">
          <h1 className="fw-bold mb-4">Trust with Confidence</h1>

          <div className="mb-4 p-3 border rounded shadow-sm">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted mb-0">
              That's why 1.3+ crore customers trust DhanSetu with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4 p-3 border rounded shadow-sm">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted mb-0">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace.
            </p>
          </div>

          <div className="mb-4 p-3 border rounded shadow-sm">
            <h5 className="fw-semibold">The DhanSetu universe</h5>
            <p className="text-muted mb-0">
              Not just an app, but a whole ecosystem with 30+ fintech startups.
            </p>
          </div>

          <div className="p-3 border rounded shadow-sm">
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted mb-0">
              Initiatives like Nudge & Kill Switch help you manage money
              smarter.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "85%" }}
          />

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="#"
              className="btn px-4"
              style={{ backgroundColor: "#1e81b0", color: "white"}}
            >
              Explore Products
              <i class="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
            <a href="#" className="btn btn-outline-dark px-4">
              Try Kite Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
