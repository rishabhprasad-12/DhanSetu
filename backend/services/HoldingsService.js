const HoldingModel = require("../models/HoldingsModel");

const updateHolding = async ({ userId, name, qty, price, mode }) => {
  let hold = await HoldingModel.findOne({ userId, name });

  if (!hold && mode === "BUY") {
    return await HoldingModel.create({
      userId,
      name,
      qty,
      avg: price,
      price: price,
      prevClose: price,
    });
  }

  if (!hold) return;

  if (mode === "BUY") {
    const totalQty = hold.qty + qty;

    hold.avg = (hold.qty * hold.avg + qty * price) / totalQty;
    hold.qty = totalQty;
  } else {
    hold.qty -= qty;
  }

  if (hold.qty <= 0) {
    return await HoldingModel.deleteOne({ _id: hold._id });
  }

  return await hold.save();
};

module.exports = updateHolding;
