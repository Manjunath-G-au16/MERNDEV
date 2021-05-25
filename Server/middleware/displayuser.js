const User = require("../model/userSchema");

const displayuser = async (req, res, next) => {
  const category = req.body.category;
  try {
    if (category == "all") {
      const rootUser = await User.find();
      if (!rootUser) {
        throw new Error("User not found");
      }
      req.rootUser = rootUser;
      next();
    } else {
      const rootUser = await User.find({ name: category });
      if (!rootUser) {
        throw new Error("User not found");
      }
      req.rootUser = rootUser;
      next();
    }
  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};
module.exports = displayuser;
