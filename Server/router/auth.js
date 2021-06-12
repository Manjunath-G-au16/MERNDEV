const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const finduser = require("../middleware/finduser");
const displayuser = require("../middleware/displayuser");
const userprofile = require("../middleware/userprofile");
const deleteskill = require("../middleware/deleteskill");
const deleteproject = require("../middleware/deleteproject");
const deletesocial = require("../middleware/deletesocial");

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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fill both the fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials" });
      } else {
        const token = await userLogin.generateAuthToken();
        console.log("token:", token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now + 25892000000),
          httpOnly: true,
        });
        return res.json({ message: "User signedin successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});
//About Section
router.get("/about", authenticate, (req, res) => {
  console.log("Hello from About");
  res.send(req.rootUser);
});
//User Profile Section
router.post("/xxyyzz", userprofile, (req, res) => {
  console.log("Hello from userProfile");
  res.send(req.rootUser);
});

//User Data
router.get("/userdata", authenticate, (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
});
//Find
router.post("/finduser", finduser, (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
});
//Delete Skill
router.delete("/deleteskill", deleteskill, (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
  // res.send(req.rootUser);
});
//Delete project
router.delete("/deleteproject", deleteproject , (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
  // res.send(req.rootUser);
});
//Delete social
router.delete("/deletesocial", deletesocial , (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
  // res.send(req.rootUser);
});
//Display all
router.post("/displayuser", displayuser, (req, res) => {
  console.log("Hello from Userdata");
  res.send(req.rootUser);
});
//Finduser
// router.get("/finduser", async (req, res) => {
//   try {
//     const username = "test3";
//     const rootUser = await User.findOne({
//       "name": username,
//     });
//     if (!rootUser) {
//       throw new Error("User not found");
//     }
//     req.rootUser = rootUser;
//   } catch (err) {
//     res.status(401).send("Unauthorized:No token provided");
//     console.log(err);
//   }
// });
//Update Data
router.put("/update", async (req, res) => {
  const newWork = req.body.newWork;
  const id = req.body.id;
  console.log(id);
  console.log(newWork);
  try {
    await User.findById(id, (error, workToUpdate) => {
      workToUpdate.work = String(newWork);
      workToUpdate.save();
    });
  } catch (error) {
    console.log(error);
  }
  console.log("updated");
  res.send("Updated");
});
//Update Pic
router.put("/updatePic", async (req, res) => {
  const newPic = req.body.newPic;
  const id = req.body.id;
  console.log(id);
  console.log(newPic);
  try {
    await User.findById(id, (error, workToUpdate) => {
      workToUpdate.pic = String(newPic);
      workToUpdate.save();
    });
  } catch (error) {
    console.log(error);
  }
  console.log("updated");
  res.send("Updated");
});

//Update Data
router.put("/edit", async (req, res) => {
  const { name, email, phone, work, id, pic, about, exp} = req.body;
  console.log(id);
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(about);
  console.log(exp);

  try {
    await User.findById(id, (error, workToUpdate) => {
      
      workToUpdate.pic = String(pic);
      workToUpdate.name = String(name);
      workToUpdate.email = String(email);
      workToUpdate.phone = Number(phone);
      workToUpdate.work = String(work);
      workToUpdate.about = String(about);
      workToUpdate.exp = String(exp);
      workToUpdate.save();
    });
  } catch (error) {
    console.log(error);
  }
  console.log("updated");
  res.send("Updated");
});
//Contact Section
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("Plz fill the contact form");
      return res.status(422).json({ error: "plz fill the contact form" });
    }
    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "User contact data sent successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
//Contact Section
router.post("/project", authenticate, async (req, res) => {
  try {
    const { projectpic, url, details } = req.body;
    if (!projectpic || !url || !details ) {
      console.log("Plz fill the contact form");
      return res.status(422).json({ error: "plz fill the contact form" });
    }
    const userProject = await User.findOne({ _id: req.userID });

    if (userProject) {
      const userProjectDetails = await userProject.addProject(
        projectpic,
        url,
        details,
      );
      await userProject.save();
      res.status(201).json({ message: "User project data sent successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
//Social Section
router.post("/social", authenticate, async (req, res) => {
  try {
    const { media, link,  } = req.body;
    if (!media || !link  ) {
      console.log("Plz fill the contact form");
      return res.status(422).json({ error: "plz fill the contact form" });
    }
    const userSocial = await User.findOne({ _id: req.userID });

    if (userSocial) {
      const userSocialDetails = await userSocial.addSocial(
        media,
        link,
      );
      await userSocial.save();
      res.status(201).json({ message: "User social data sent successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
//Skill Section
router.post("/skill", authenticate, async (req, res) => {
  try {
    const { skill, value,  } = req.body;
    if (!skill || !value  ) {
      console.log("Plz fill the contact form");
      return res.status(422).json({ error: "plz fill the contact form" });
    }
    const userSkill = await User.findOne({ _id: req.userID });

    if (userSkill) {
      const userSkillDetails = await userSkill.addSkill(
        skill,
        value,
      );
      await userSkill.save();
      res.status(201).json({ message: "User skill data sent successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//Logout Section
router.get("/logout", (req, res) => {
  console.log("Hello from Logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("Logout User");
});
module.exports = router;
