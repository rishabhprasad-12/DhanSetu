import React, { useState, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";

import API from "../api/api";

const GeneralContext = React.createContext({
  user: null,
  setUser: () => {},
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {

  const [user, setUser] = useState(null);

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/auth/userId');
        // console.log(res.data.user);
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [])

  const handleOpenOrderWindow = (uid, mode = "BUY") => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        user, setUser,
        openBuyWindow: (uid) => handleOpenOrderWindow(uid, "BUY"),
        openSellWindow: (uid) => handleOpenOrderWindow(uid, "SELL"),
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
