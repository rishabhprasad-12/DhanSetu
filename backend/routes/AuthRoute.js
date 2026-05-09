const router = require("express").Router();

const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const { sendOtp, verifyOtp } = require("../controllers/OtpController");

router.post("/", userVerification);
router.get("/verify", userVerification);

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
