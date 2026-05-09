import React from "react";

export default function Steps() {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }} className="p-5">
      <div className="container mt-5">
        <h3 className="text-center mt-5 p-5">
          Steps to open a demat account with DhanSetu{" "}
        </h3>
        <div className="row justify-content-center">
          <div className="col-6 pt-4 mb-5" style={{ width: "40%" }}>
            <img src="media/images/steps-acop.svg" alt="" />
          </div>
          <div className="col-6 mb-5 pt-4">
            <div className="d-flex align-items-center">
              <span
                className="border rounded-circle p-2 mx-2 text-center"
                style={{ width: "2.5em", height: "50%" }}
              >
                01
              </span>
              <p className="fs-5 fw-semibold mb-0">
                Enter the requested details
              </p>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <span
                className="border rounded-circle p-2 mx-2 text-center"
                style={{ width: "2.5em", height: "50%" }}
              >
                02
              </span>
              <p className="fs-5 fw-semibold mb-0">
                Complete e-sign & verification
              </p>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <span
                className="border rounded-circle p-2 mx-2 text-center"
                style={{ width: "2.5em", height: "50%" }}
              >
                03
              </span>
              <p className="fs-5 fw-semibold mb-0">Start investing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
