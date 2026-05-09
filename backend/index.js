require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");
const getRoute = require("./routes/GetRoute");
const postRoute = require("./routes/PostRoute");

const startPriceEngine = require('./util/PriceEngine')

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

const app = express();

startPriceEngine();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(bodyParser.json());

app.use(cookieParser());

// app.get('/addPosition', async(req, res) => {
//     let tempPositions = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];

//     tempPositions.forEach((item) => {
//         let newPositions = new PositionsModel({
//           product: item.product,
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//           isLoss: item.isLoss,
//         });

//         newPositions.save()
//     });
//     res.send('Done!');
// })
app.use("/auth", authRoute);
app.use("/auth", getRoute);
app.use("/auth", postRoute);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(PORT, () => {
  console.log("App is Listening");
  mongoose.connect(url);
  console.log("DB is connected");
});
