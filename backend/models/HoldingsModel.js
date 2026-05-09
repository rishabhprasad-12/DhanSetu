const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    name: String,
    qty: Number,
    avg: Number,
    price: {type: Number, default: 0},
    prevClose: {type: Number, default: 0},
  },
  { timestamps: true },
);

module.exports = mongoose.model("holding", holdingSchema);
