// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const sendOtp = (email) => API.post("/auth/send-otp", { email });

export const verifyOtp = (email, otp) =>
  API.post("/auth/verify-otp", { email, otp });

export const signup = (data) => API.post("/auth/signup", data);

export const login = (data) => API.post("/auth/login", data);
