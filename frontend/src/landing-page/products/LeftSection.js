import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 mt-5">
          <img src={imageURL} alt="productImage1" style={{ width: "99%" }} />
        </div>
        <div className="col-1 mt-5"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="pb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "1.5rem" }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                style={{ marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
