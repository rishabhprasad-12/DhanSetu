const HoldingModel = require("../models/HoldingsModel");
const PositionsModel = require("../models/PositionsModel");
const OrdersModel = require("../models/OrdersModel");
const User = require("../models/UserModel");
const updatePosition = require('../services/PositionService');
const updateHoldings = require('../services/HoldingsService');
const jwt = require("jsonwebtoken");

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

module.exports.newOrders = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const userId = getUserIdFromToken(req);
    console.log("USER ID:", userId);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { name, qty, price, mode, product } = req.body;

    // SELL VALIDATION
    if (mode === "SELL") {
      const holding = await HoldingModel.findOne({
        userId,
        name,
      });

      // User does not own stock
      if (!holding) {
        return res.status(400).json({
          message: "You don't own this stock",
        });
      }

      // User trying to sell more than owned
      if (holding.qty < qty) {
        return res.status(400).json({
          message: "Insufficient stock quantity",
        });
      }
    }

    // CREATE ORDER
    const newOrder = await OrdersModel.create({
      userId,
      name,
      qty,
      price,
      mode,
      product,
      status: "COMPLETED",
    });

    // UPDATE BALANCE
    const user = await User.findById(userId);

    if (mode === "BUY") {
      // Optional balance check
      if (user.balance < qty * price) {
        return res.status(400).json({
          message: "Insufficient balance",
        });
      }

      user.balance -= qty * price;
    } else {
      user.balance += qty * price;
    }

    await user.save();

    // UPDATE POSITIONS
    await updatePosition({
      userId,
      name,
      qty,
      price,
      mode,
      product,
    });

    // UPDATE HOLDINGS
    await updateHoldings({
      userId,
      name,
      qty,
      price,
      mode,
    });

    res.status(201).json({
      message: "Order Saved!",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
