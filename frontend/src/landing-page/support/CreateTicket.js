import React from "react";
// import Downdrop from "./Downdrop";

export default function CreateTicket() {
  const supportData = [
    {
      title: "Account Opening",
      icon: "fa-solid fa-circle-plus",
      content: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-solid fa-user",
      content: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities]",
      ],
    },
    {
      title: "Kite",
      icon: "fa-solid fa-chart-line",
      content: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-solid fa-indian-rupee-sign",
      content: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      icon: "fa-solid fa-circle-notch",
      content: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-solid fa-ring",
      content: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mt-5 ">
          <Dropdown supportData={supportData} />
        </div>
        <div className="col-4 mt-5">
          <div
            className="mt-5"
            style={{
              width: "20rem",
              backgroundColor: "#ffeecf",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "orange",
                position: "absolute",
                height: "100%",
                width: "0.8em",
              }}
            ></div>

            <ul className="m-3">
              <li className="text-primary mb-2 p-2">
                <a href="#" className="mt-5">
                  Trading holiday on account of Good Friday on April 03, 2026
                </a>
              </li>
              <li className="text-primary mb-2 p-2">
                <a href="#" className="mt-5">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>
          <div className="card mt-5" style={{ width: "20rem" }}>
            <div className="card-header fw-semibold text-muted">
              Quick links
            </div>

            <ol className="list-group list-group-flush list-group-numbered">
              <li className="list-group-item text-primary">
                <a href="#" className="text-decoration-none text-primary">
                  Track account opening
                </a>
              </li>

              <li className="list-group-item text-primary">
                <a href="#" className="text-decoration-none text-primary">
                  Track segment activation
                </a>
              </li>

              <li className="list-group-item text-primary">
                <a href="#" className="text-decoration-none text-primary">
                  Intraday margins
                </a>
              </li>

              <li className="list-group-item text-primary">
                <a href="#" className="text-decoration-none text-primary">
                  Kite user manual
                </a>
              </li>

              <li className="list-group-item text-primary">
                <a href="#" className="text-decoration-none text-primary">
                  Learn how to create a ticket
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dropdown = ({ supportData }) => {
  return (
    <div className="container mt-5">
      <div className="accordion" id="supportAccordion">
        {supportData.map((item, index) => (
          <div className="accordion-item mb-3 border rounded" key={index}>
            {/* HEADER */}
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                style={{ padding: "0.5em" }}
              >
                {/* ICON BOX */}
                <span className="bg-light p-3 me-3 rounded">
                  <i className={`${item.icon}`}></i>
                </span>

                <span className="fw-semibold">{item.title}</span>
              </button>
            </h2>

            {/* BODY */}
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#supportAccordion"
            >
              <div className="accordion-body">
                {item.content.length > 0 ? (
                  <ul className="list-unstyled">
                    {item.content.map((link, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center">
                        <i
                          className="fa-solid fa-circle text-primary me-3"
                          style={{ fontSize: "6px" }}
                        ></i>

                        <a
                          href="#"
                          className="text-decoration-none text-primary"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted mb-0">Content coming soon...</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
