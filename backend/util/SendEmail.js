const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"DhanSetu" <${process.env.EMAIL}>`,
      to: email,
      subject: "Verify Your DhanSetu Account",

      html: `
    <div style="
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 40px 20px;
    ">
      <div style="
        max-width: 500px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        padding: 40px 30px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      ">
        
        <h1 style="
          color: #387ed1;
          margin-bottom: 10px;
        ">
          DhanSetu
        </h1>

        <p style="
          color: #555;
          font-size: 16px;
          margin-bottom: 30px;
        ">
          Your One-Time Password (OTP) for email verification is:
        </p>

        <div style="
          display: inline-block;
          background: #f1f5ff;
          color: #387ed1;
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          padding: 15px 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        ">
          ${otp}
        </div>

        <p style="
          color: #777;
          font-size: 14px;
          line-height: 1.6;
        ">
          This OTP is valid for 5 minutes.<br/>
          Please do not share it with anyone.
        </p>

        <hr style="
          border: none;
          border-top: 1px solid #eee;
          margin: 30px 0;
        " />

        <p style="
          color: #999;
          font-size: 12px;
        ">
          © ${new Date().getFullYear()} DhanSetu. All rights reserved.
        </p>
      </div>
    </div>
  `,
    });

    console.log("Email sent:", info.response);

    return info;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

module.exports = sendEmail;
