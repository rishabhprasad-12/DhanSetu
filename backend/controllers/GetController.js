const HoldingModel = require("../models/HoldingsModel");
const PositionsModel = require("../models/PositionsModel");
const OrdersModel = require("../models/OrdersModel");
const User = require('../models/UserModel');
const jwt = require("jsonwebtoken");

// Helper to extract userId from token
const getUserIdFromToken = (req) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    return decoded.id;
  } catch (err) {
    return null;
  }
};

module.exports.allHoldings = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const allHoldings = await HoldingModel.find({ userId });
    // for (let stock of allHoldings) {
    //   stock.prevClose = stock.price;
    //   await stock.save();
    // }

    // console.log("fixed");
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.allPositions = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const allPositions = await PositionsModel.find({ userId });
    // for (let stock of allPositions) {
    //   stock.prevClose = stock.price;
    //   await stock.save();
    // }

    // console.log("fixed");
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.allOrders = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const allOrders = await OrdersModel.find({ userId });
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserId = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findById(userId).select("username email");

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ success: false });
  }
};