import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./Login";

import HomePage from "./landing-page/home/HeroPage";
import SignUp from "./landing-page/signup/SignUpPage";
import AboutPage from "./landing-page/about/AboutPage";
import PricingPage from "./landing-page/pricing/PricingPage";
import ProductPage from "./landing-page/products/ProductPage";
import SupportPage from "./landing-page/support/SupportPage";

import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import NotFound from "./landing-page/NotFound";

import ScrollToTop from "./landing-page/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
