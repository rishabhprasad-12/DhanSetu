import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import API from "../api/api";

import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";

export default function BuyActionWindow({ uid, mode = "BUY" }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const [toast, setToast] = useState({
    message: "",
    type: "",
    display: false,
  });

  const showToast = (message, type) => {
    setToast({message, type, display: true});

    setTimeout(() => {
      setToast((prev) => ({
        ...prev, display: false
      }))
    }, 3000)
  }

  const generalContext = useContext(GeneralContext);
  const isSellOrder = mode === "SELL";

  const handleOrderClick = async () => {
    if(stockQuantity <= 0 || stockPrice <= 0) {
      showToast("Enter valid quantity and price", "danger");
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

      showToast(`${mode === "Sell" ? "Sell" : "Buy"} order placed successfully`, "success");

      generalContext.closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
      showToast(err.response?.data?.message, "danger" || "Failed to place order", "danger");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* Toast/Alert */}
      <div
        className="toast-container position-fixed bottom-0 start-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          className={`toast fade align-items-center text-bg-${toast.type} border-0 ${toast.display ? "show" : "hide"}`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToast({ ...toast, display: false })}
            ></button>
          </div>
        </div>
      </div>

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
