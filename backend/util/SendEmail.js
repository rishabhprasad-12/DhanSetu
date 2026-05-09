const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"DhanSetu" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
    });

    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

module.exports = sendEmail;
