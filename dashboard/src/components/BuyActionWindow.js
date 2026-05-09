import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import API from "../api/api";

import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

export default function BuyActionWindow({ uid, mode = "BUY" }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);
  const isSellOrder = mode === "SELL";

  const handleOrderClick = async () => {
    if(stockQuantity <= 0 || stockPrice <= 0) {
      alert("Enter valid quantity and price");
      return;
    }

    try {
      await API.post("/auth/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode,
        product: "CNC"
      });

      window.dispatchEvent(new Event("orderPlaced"));

      generalContext.closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Prices</legend>
            <input
              type="number"
              name="prices"
              id="prices"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required &#8377;140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleOrderClick}>
            {isSellOrder ? "Sell" : "Buy"}
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
