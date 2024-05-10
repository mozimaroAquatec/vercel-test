const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// connect to data base
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//
app.all("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "sucess", message: "welcom to home page" });
});

//
app.all("*", (req, res) => {
  return res.status(404).json({ status: "fail", message: "url not fount " });
});
// server run
app.listen(process.env.PORT, () => {
  console.log(`server is run on port ${process.env.PORT}`);
});
