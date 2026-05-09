const Otp = require("../models/OtpModel");
const User = require("../models/UserModel");
const sendEmail = require("../util/SendEmail");

module.exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("Email:", email);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Generate OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    // Save OTP with expiry
    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    });

    // Send email
    await sendEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log("Send OTP Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};

module.exports.verifyOtp = async (req, res) => {
  try {
    console.log("OTP Send");

    const { email, otp } = req.body;
    console.log(`Email: ${email}, OTP: ${otp}`);

    const record = await Otp.findOne({ email, otp });

    if (!record || record.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    res.json({ message: "OTP verified" });
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    res
      .status(500)
      .json({ message: "Failed to verify OTP", error: error.message });
  }
};
