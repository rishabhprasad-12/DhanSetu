import React, { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "./api/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [toast, setToast] = useState({
    message: "",
    type: "",
    display: false,
  });

  const showToast = (message, type) => {
    setToast({ message, type, display: true });

    setTimeout(() => {
      setToast({ ...toast, display: false });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);

      if (!res.data.success) {
        showToast(res.data.message || "Login failed", "danger");
      } else {
        localStorage.setItem("token", res.data.token);

        showToast(res.data.message, "success");

        setTimeout(() => {
          window.location.href = `https://dhan-setu-qef5.vercel.app?token=${res.data.token}`;
          // window.location.href = `http://localhost:3001?token=${res.data.token}`;
        }, 1500);
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast(error.response?.data?.message || "Login failed", "danger");
    }
  };

  return (
    <div className="container mt-5 p-5 d-flex flex-column align-items-center justify-content-center w-50">
      {/* Toast/Alert */}
      <div
        className="toast-container position-fixed bottom-0 start-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          className={`toast fade align-items-center text-bg-${toast.type} border-0 ${toast.display ? "show" : "hide"}`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToast({ ...toast, display: false })}
            ></button>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="card p-5 shadow p-3 mb-5 bg-body-tertiary rounded"
      >
        <div className="text-center">
          <img
            src="/media/images/login-logo.png"
            alt="login-logo"
            style={{ width: "15%" }}
          />
          <h3 className="m-3 p-2">Login to Kite</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            autoComplete="current-email"
            aria-describedby="emailHelp"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <div id="emailHelp" className="form-text">
            <span className="text-danger">Note:</span> Remember your password.
          </div>
        </div>
        <button
          type="submit"
          className="btn mt-3"
          style={{ backgroundColor: "rgb(228, 91, 39)", color: "white" }}
        >
          Submit
        </button>
        <p className="text-muted p-3">
          Don't have Account?{" "}
          <Link to="/signup" className="text-decoration-none">
            <span style={{ color: "rgb(228, 91, 39)" }}>Register Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
