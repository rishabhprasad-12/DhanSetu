const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    name: String,
    qty: Number,
    avg: Number,
    product: String,
    price: {type: Number, default: 0},
    prevClose: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("position", positionsSchema);
