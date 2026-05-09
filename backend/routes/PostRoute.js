const router = require("express").Router();
const { newOrders } = require('../controllers/PostController')

router.post("/newOrders", newOrders);

module.exports = router;