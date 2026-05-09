const router = require("express").Router();
const {
  allHoldings,
  allPositions,
  allOrders,
  getUserId,
} = require("../controllers/GetController");

router.get("/allHoldings", allHoldings);
router.get("/allPositions", allPositions);
router.get("/allOrders", allOrders);
router.get("/userId", getUserId);

module.exports = router;
