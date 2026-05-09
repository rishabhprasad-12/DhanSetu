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
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, qty, price, mode, product } = req.body;

    const newOrder = await OrdersModel.create({
      userId,
      name,
      qty,
      price,
      mode,
      product,
      status: "COMPLETED",
    });

    // update Balance
    const user = await User.findById(userId);

    if (mode === "BUY") user.balance -= qty * price;
    else user.balance += qty * price;

    await user.save();

    // update Position
    await updatePosition({ userId, name, qty, price, mode, product });

    // update Holdings
    await updateHoldings({ userId, name, qty, price, mode });

    res.status(201).json({ message: "Order Saved!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
