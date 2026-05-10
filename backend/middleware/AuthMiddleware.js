const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ status: false, message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.json({
      status: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: "Invalid token",
    });
  }
};
