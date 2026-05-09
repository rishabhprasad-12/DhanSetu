import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import API from "../api/api";

const Summary = () => {
  const { user } = useContext(GeneralContext);

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      API.get("/auth/allHoldings")
        .then((res) => setAllHoldings(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);


  // 🔥 CALCULATIONS

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0,
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent = totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;

  const format = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(2) + "k";
    return num.toFixed(2);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username}</h6>
        <hr className="divider" />
      </div>

      {/* EQUITY SECTION (STATIC FOR NOW) */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{format(pnl)}{" "}
              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercent.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{format(currentValue)}</span>
            </p>
            <p>
              Investment <span>{format(totalInvestment)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
