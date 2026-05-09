const HoldingModel = require("../models/HoldingsModel");
const PositionsModel = require("../models/PositionsModel");

const startPriceEngine = () => {
  setInterval(async () => {
    try {
      const holdings = await HoldingModel.find();
      const positions = await PositionsModel.find();

      // Create a map of all unique stock names and their current prices
      const stockPrices = {};

      // Collect current prices from both holdings and positions
      for (let h of holdings) {
        if (!stockPrices[h.name]) {
          stockPrices[h.name] = h.price || h.avg;
        }
      }
      for (let p of positions) {
        if (!stockPrices[p.name]) {
          stockPrices[p.name] = p.price || p.avg;
        }
      }

      // Generate new prices for each stock with random fluctuation
      const newPrices = {};
      for (let stockName in stockPrices) {
        const currentPrice = stockPrices[stockName];
        const change = (Math.random() - 0.5) * 2; // Smaller fluctuation: -1 to +1
        newPrices[stockName] = Number((currentPrice + change).toFixed(2));
      }

      // Update all holdings with new prices
      for (let h of holdings) {
        h.price = newPrices[h.name];
        await h.save();
      }

      // Update all positions with new prices
      for (let p of positions) {
        p.price = newPrices[p.name];
        await p.save();
      }

      // console.log("📈 Prices Updated...");
    } catch (err) {
      console.error("Price Engine Error:", err);
    }
  }, 3000); // every 3 sec
};

module.exports = startPriceEngine;
