import React, { useState, useEffect } from "react";
import API from "../api/api";

const Positions = () => {
  let [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      API.get("/auth/allPositions")
        .then((res) => {
          console.log(res.data);
          setAllPositions(res.data);
        })
        .catch((err) => {
          console.error("Error fetching positions:", err);
        });
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

  return (
    <>
      <h3 className="title">Positions {`(${allPositions.length})`}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
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

          {allPositions.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const pnl = (stock.price - stock.avg) * stock.qty;
            const netChange = ((stock.price - stock.avg) / stock.avg) * 100;
            const dayValue = (stock.price - stock.prevClose) * stock.qty;
            const dayPercent =
              ((stock.price - stock.prevClose) / stock.prevClose) * 100;

            return (
              <tbody>
                <tr key={index}>
                  <td>{stock.product}</td>
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
    </>
  );
};

export default Positions;
