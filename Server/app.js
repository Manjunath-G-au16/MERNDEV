const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const User = require("./model/userSchema");
const cookieParser = require("cookie-Parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.get("/find", (req, res) => {
  res.send("SignupPage Server");
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
