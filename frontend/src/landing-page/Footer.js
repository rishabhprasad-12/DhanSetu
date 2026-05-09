import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col m-2">
            <img
              src="media/images/logo.svg"
              alt="Company Logo"
              style={{ width: "45%", marginBottom: "0.5rem" }}
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not DhanSetu Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled footer-links small">
              <li>
                <a href="#about" className="text-decoration-none text-muted ">
                  About
                </a>
              </li>
              <li>
                <a href="#product" className="text-decoration-none text-muted">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Referral programme
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  DhanSetu.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  DhanSetu cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled footer-links small">
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  D-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  List of charges
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled footer-links small">
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Open an account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            DhanSetu Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
            no.: INZ000031633 CDSL: Depository services through DhanSetu
            Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
            Commodity Trading through DhanSetu Commodities Pvt. Ltd. MCX: 46025
            – SEBI Registration no.: INZ000038238 Registered Address: DhanSetu
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@dhansetu.com, for DP related to dp@dhansetu.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of DhanSetu and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="fw-semibold small d-flex flex-wrap justify-content-center gap-3 m-4">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & Conditions</span>
          <span>Policies & Procedures</span>
          <span>Privacy Policies</span>
          <span>Disclosure</span>
        </div>
      </div>
    </footer>
  );
}
