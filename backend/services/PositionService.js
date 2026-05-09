const PositionsModel = require("../models/PositionsModel");

const updatePosition = async ({ userId, name, qty, price, mode, product }) => {
  let pos = await PositionsModel.findOne({ userId, name });

  if (!pos) {
    return await PositionsModel.create({
      userId,
      name,
      product,
      qty: mode === "BUY" ? qty : -qty,
      avg: price,
      price: price,
      prevClose: price,
    });
  }

  if (mode === "BUY") {
    const totalQty = pos.qty + qty;

    pos.avg = (pos.qty * pos.avg + qty * price) / totalQty;
    pos.qty = totalQty;
  } else {
    pos.qty -= qty;
  }

  return await pos.save();
};

module.exports = updatePosition;
