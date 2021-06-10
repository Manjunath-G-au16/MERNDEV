const User = require("../model/userSchema");

const displayuser = async (req, res, next) => {
  const category = req.body.category;
  try {
    let rootUser = null;

    if (category == "") {
      rootUser = await User.find();
    } else {
      rootUser = await User.find({ work: category });
    }

    if (!rootUser) {
      throw new Error("User not found");
    }
    req.rootUser = rootUser;
    next();

  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};
module.exports = displayuser;
