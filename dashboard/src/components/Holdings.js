import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import API from "../api/api";
import { VerticalGraph } from "./Graphs/VerticalGraph";

const Holdings = () => {
  let [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      API.get("/auth/allHoldings")
        .then((res) => setAllHoldings(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    const refresh = () => fetchData();
    window.addEventListener("orderPlaced", refresh);

    return () => {
      clearInterval(interval);
      window.removeEventListener("orderPlaced", refresh);
    };
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0,
  );

  const totalPnl = currentValue - totalInvestment;

  const totalPercent =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  // Graphs
  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(53, 162, 235, 0.4)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {allHoldings.length === 0 ? (
        <div className="no-orders mb-5">
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>

              {allHoldings.map((stock, index) => {
                const currValue = stock.price * stock.qty;
                // const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                const pnl = (stock.price - stock.avg) * stock.qty;
                const netChange = ((stock.price - stock.avg) / stock.avg) * 100;

                const dayValue = (stock.price - stock.prevClose) * stock.qty;
                const dayPercent =
                  ((stock.price - stock.prevClose) / stock.prevClose) * 100;

                return (
                  <tbody>
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{currValue.toFixed(2)}</td>
                      <td className={pnl >= 0 ? "profit" : "loss"}>
                        {pnl.toFixed(2)}
                      </td>
                      <td className={netChange >= 0 ? "profit" : "loss"}>
                        {netChange.toFixed(2)}
                      </td>
                      <td className={dayValue >= 0 ? "profit" : "loss"}>
                        {dayValue.toFixed(2)} ({dayPercent.toFixed(2)}%)
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div style={{ marginTop: "64px" }}>
            <VerticalGraph data={data} />
          </div>
        </div>
      )}

      <div className="row">
        <div className="col">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>₹{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={totalPnl >= 0 ? "profit" : "loss"}>
            ₹{totalPnl.toFixed(2)} ({totalPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
