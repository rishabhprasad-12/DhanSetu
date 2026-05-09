import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold" style={{ color: "#02a6d4" }}>
          404
        </h1>

        <h4 className="mb-3">Page not found</h4>

        <p className="text-muted mb-4">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn px-4 py-2"
          style={{ backgroundColor: "#1e81b0", color: "white" }}
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}
