import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "18%" }}
          />
        </Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link px-3" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" aria-current="page" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3"
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" aria-current="page" to="/support">
                Support
              </Link>
            </li>

            {/* MENU ICON (Zerodha style) */}
            {/* <li className="nav-item ms-lg-3 d-none d-lg-block">
              <a href="#" className="nav-link">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
