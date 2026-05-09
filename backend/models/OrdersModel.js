const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    name: String, // INFY, TCS
    qty: Number,
    price: { type: Number, default: 0 },
    prevClose: { type: Number, default: 0 },
    mode: { type: String, enum: ["BUY", "SELL"] },
    product: { type: String, enum: ["CNC", "MIS"], default: "CNC" },
    status: { type: String, default: "COMPLETED" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("orders", ordersSchema);
