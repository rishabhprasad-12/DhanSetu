const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const user = await User.create({
      email,
      password,
      username,
      isVerified: true,
      createdAt,
    });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      token,
      user,
    });
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Signup failed", success: false, error: error.message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found!", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Incorrect password or email", success: false });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res
      .status(200)
      .json({ message: "You're logged in successfully", success: true, token });
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Login failed", success: false, error: error.message });
  }
};
