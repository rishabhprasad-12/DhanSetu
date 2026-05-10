const https = require("node:https");

const sendEmail = async (email, otp) => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_EMAIL;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  if (!senderEmail) {
    throw new Error("BREVO_EMAIL is not configured");
  }

  const htmlContent = `
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
  `;

  const payload = JSON.stringify({
    sender: {
      name: "DhanSetu",
      email: senderEmail,
    },
    to: [{ email }],
    subject: "Verify Your DhanSetu Account",
    htmlContent,
  });

  const requestOptions = {
    method: "POST",
    hostname: "api.sendinblue.com",
    path: "/v3/smtp/email",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  const responseBody = await new Promise((resolve, reject) => {
    const req = https.request(requestOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = data ? JSON.parse(data) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            return resolve(parsed);
          }

          const error = new Error(
            parsed.message ||
              `Brevo API request failed with status ${res.statusCode}`,
          );
          error.statusCode = res.statusCode;
          error.responseBody = parsed;
          return reject(error);
        } catch (parseError) {
          return reject(
            new Error(`Failed to parse Brevo response: ${parseError.message}`),
          );
        }
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });

  console.log("✅ Email sent successfully via Brevo API");
  console.log("Brevo response:", responseBody);

  return responseBody;
};

module.exports = sendEmail;
