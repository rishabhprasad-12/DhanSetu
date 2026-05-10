import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import API from "../api/api";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const LOGIN_URL =
  process.env.REACT_APP_LOGIN_URL || "https://dhan-setu-six.vercel.app/login";

const Dashboard = () => {
  useEffect(() => {
    API.get("/auth/verify")
      .then((res) => {
        if (!res.data.status) {
          window.location.href = LOGIN_URL;
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = LOGIN_URL;
      });
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
