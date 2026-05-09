import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../api/api";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      API.get("/auth/allOrders")
        .then((res) => {
          console.log(res.data);
          setAllOrders(res.data);
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
        });
    }

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
      <h3 className="title">Orders {`(${allOrders.length})`}</h3>

      <div className="orders">
        {allOrders.length === 0 ? (
          <div className="no-orders mb-5">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-table mt-5">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Type</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {allOrders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td
                      className={
                        stock.mode === "BUY" ? "buy-stock" : "sell-stock"
                      }
                    >
                      {stock.mode}
                    </td>
                    <td>{stock.product}</td>
                    <td>{stock.qty}</td>
                    <td>₹{stock.price}</td>
                    <td>{stock.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
