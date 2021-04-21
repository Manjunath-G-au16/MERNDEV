const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("HomePage Server from router");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ Error: "plz fill the field properly" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ Error: "User already Exists" });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user.save()
        .then(() => {
          res.status(201).json({ message: "User registered successfully" });
        })
        .catch((err) => {
          res.status(500).json({ Error: "Failed to register" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
