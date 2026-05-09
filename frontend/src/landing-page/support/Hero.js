import React from "react";

export default function Hero() {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }} className="p-5">
      <div className="container mt-3">
        <div className="row">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-5 gap-3">
            <h1 className="fw-semibold mb-0 mt-3">Support Portal</h1>

            <a
              href="#"
              className="btn px-4 mt-3"
              style={{ backgroundColor: "#1e81b0", color: "white" }}
            >
              My Tickets
            </a>
          </div>
          <div className="mt-5">
            <div className="input-group rounded shadow-lg">
              <span className="input-group-text bg-white">
                <i className="fa-solid fa-magnifying-glass text-muted"></i>
              </span>

              <input
                type="text"
                className="border border-start-0 p-3"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                style={{ width: "96%", outline: "none" }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
