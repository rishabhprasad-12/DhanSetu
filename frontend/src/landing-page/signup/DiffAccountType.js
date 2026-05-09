import React from 'react'
import { Link } from 'react-router-dom';

export default function DiffAccountType() {

  const contents = [
    {
      icon: "fa-solid fa-circle-user",
      title: "Individual Account",
      description: "Invest in equity, mutual funds and derivatives",
    },
    {
      icon: "fa-solid fa-users",
      title: "HUF Account",
      description: "Make tax-efficient investments for your family",
    },
    {
      icon: "fa-solid fa-globe",
      title: "NRI Account",
      description: "Invest in equity, mutual funds, debentures, and more",
    },
    {
      icon: "fa-solid fa-child",
      title: "Minor Account",
      description:
        "Teach your little ones about money & invest for their future with them",
    },
    {
      icon: "fa-solid fa-city",
      title: "Corporate / LLP / Partnership",
      description: "Manage your business surplus and investments easily",
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className="fs-2 text-center m-3 fw-semibold">
        Explore different account types
      </h4>
      <div className='mb-5'>
        <Cards contents={contents} />
      </div>
    </div>
  );
}

const Cards = ({contents}) => {
  return (
    <div className="row mt-5 justify-content-center">
      {contents.map((content, index) => (
        <div className="col-12 col-md-4 mb-4" key={index}>
          <div className="card border-0 shadow-sm h-100 text-center p-4 zerodha-card">
            <div className="mb-3">
              <i
                className={content.icon}
                style={{ fontSize: "32px", color: "#387ed1" }}
              ></i>
            </div>

            <div className="card-body p-0">
              <h5 className="card-title fw-semibold mb-2">{content.title}</h5>
              <p className="card-text text-muted small">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}