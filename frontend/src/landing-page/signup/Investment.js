import React from "react";

const contents = [
  {
    url: "media/images/stocks-acop.svg",
    title: "Stocks",
    description: "Invest in all exchange-listed securities",
  },
  {
    url: "media/images/mf-acop.svg",
    title: "Mutual funds",
    description: "Invest in commission-free direct mutual funds",
  },
  {
    url: "media/images/ipo-acop.svg",
    title: "IPO",
    description: "Apply to the latest IPOs instantly via UPI",
  },
  {
    url: "media/images/fo-acop.svg",
    title: "Futures & options",
    description:
      "Hedge and mitigate market risk through simplified F&O trading",
  },
];

export default function Investment() {
  return (
    <div className="container mt-5">
      <h3 className="text-center mt-5 p-5">
        Investment options with Zerodha demat account
      </h3>
      <div className="row m-4 p-2">
        <div className="col-md-6">
          <Cards contents={contents.slice(0, 2)} />
        </div>
        <div className="col-md-6">
          <Cards contents={contents.slice(2, 4)} />
        </div>
      </div>
      <div className="text-center pb-5">
        <button
          className="btn btn-lg fw-semibold"
          style={{ backgroundColor: "#1e81b0", color: "white" }}
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}

const Cards = ({ contents }) => {
  return (
    <>
      {contents.map((content, index) => (
        <div class="mb-5 p-2" style={{ maxWidth: "400px" }} key={index}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={content.url}
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div class="col-md-8">
              <div class="card-body px-2">
                <h5 class="card-title">{content.title}</h5>
                <p class="card-text">{content.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
