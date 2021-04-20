const express = require("express");
const app = express();

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

app.listen(3000, () => {
  console.log("server is running at port no 3000");
});
