const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("HomePage Server from router");
});

//USING PROMISES
//--------------

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ Error: "plz fill the field properly" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ Error: "User already Exists" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ Error: "Failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//USING ASYNC-AWAIT
//-----------------

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ Error: "plz fill the field properly" });
  }
  try {
    const userExist = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (userExist) {
      return res.status(422).json({ Error: "User already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ Error: "Passwords are not matching " });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//signin route
//------------

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fill both the fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "user err" });
    } else {
      return res.json({ message: "User signedin successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
