const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Hello from middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("HomePage Server");
});

app.get("/about", middleware, (req, res) => {
  console.log("Hello from About");
  res.send("AboutPage Server");
});

app.get("/contact", (req, res) => {
  res.send("ContactPage Server");
});

app.get("/signin", (req, res) => {
  res.send("SigninPage Server");
});

app.get("/signup", (req, res) => {
  res.send("SignupPage Server");
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
