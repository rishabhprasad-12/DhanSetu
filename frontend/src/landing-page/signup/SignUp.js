import React, { useState } from "react";
import { Link } from "react-router-dom";

import { sendOtp, verifyOtp, signup } from "../../api/api";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    otp: "",
    username: "",
    password: "",
  });

  const [toast, setToast] = useState({
    message: "",
    type: "",
    display: false,
  });

  const showToast = (message, type) => {
    setToast({ message, type, display: true });
    console.log({ message, type });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        display: false,
      }));
    }, 3000);
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();

    try {
      const res = await sendOtp(form.email);

      if (!res.data.success) {
        showToast(res.data.message, "danger");
        return;
      }

      showToast("OTP sent to your email", "success");
      setStep(2);
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to send OTP", "danger");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const verified = await verifyOtp(form.email, form.otp);

      if (!verified) {
        showToast("Otp not verified", "danger");
      } else {
        showToast("Otp verified successfully", "success");
        setStep(3);
      }
    } catch {
      showToast("Error verifying OTP", "danger");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await signup(form);

      if (!res.data.success) {
        showToast(res.data.message || "Signup failed", "danger");
      } else {
        showToast("Account created successfully!", "success");

        localStorage.setItem("token", res.data.token);

        setTimeout(() => {
          window.location.href =
            window.location.href = `https://dhan-setu-qef5.vercel.app?token=${res.data.token}`;
        }, 1500);
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Signup failed", "danger");
    }
  };

  return (
    <div className="container">
      <div className="row ">
        {/* Left Image */}
        <div className="col-md-7 mb-5 d-flex align-items-center justify-content-center">
          <img
            src="media/images/account_open.svg"
            alt="signup"
            style={{ width: "80%" }}
          />
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
        </div>

        {/* Right Form */}
        <div className="col-md-4 mb-5">
          {step === 3 ? (
            <h3 className="mb-2 fw-bold">Create Account</h3>
          ) : (
            <h3 className="mb-2 fw-bold">Signup now</h3>
          )}

          <p className="mb-3 text-muted">
            Or{" "}
            <Link to="/login" className="text-decoration-none text-primary">
              Login
            </Link>{" "}
            to your existing application
          </p>

          {step === 1 && (
            <form>
              <input
                className="form-control form-control-lg mb-3 p-3"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />

              <button
                className="btn p-3 fw-semibold"
                style={{
                  backgroundColor: "#1e81b0",
                  color: "white",
                  width: "65%",
                }}
                onClick={handleSendOtp}
              >
                Get OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <>
              <input
                className="form-control form-control form-control-lg mb-3 p-3"
                placeholder="Enter OTP"
                onChange={(e) => setForm({ ...form, otp: e.target.value })}
              />
              <button
                className="btn p-3 btn-success fw-semibold"
                style={{
                  color: "white",
                  width: "65%",
                }}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <input
                placeholder="Username"
                className="form-control form-control form-control-lg mb-3 p-3"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control form-control-lg mb-3 p-3"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                className="btn p-3 btn-dark fw-semibold"
                style={{
                  width: "65%",
                }}
                onClick={handleSignup}
              >
                Signup
              </button>
            </>
          )}

          <p className="text-muted mt-4" style={{ fontSize: ".7em" }}>
            By proceeding, you agree to the DhanSetu{" "}
            <span>
              <a href="#" className="text-decoration-none">
                terms
              </a>
            </span>{" "}
            &{" "}
            <span>
              <a href="#" className="text-decoration-none">
                privacy policy
              </a>
            </span>
          </p>

          <hr />

          <p className="text-muted small">
            Looking to open NRI account?{" "}
            <a href="#" className="text-primary text-decoration-none">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
