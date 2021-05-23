const User = require("../model/userSchema");

const finduser = async (req, res, next) => {
  try {
    const token = req.body.name;
    const rootUser = await User.findOne({
      "name": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};
module.exports = finduser;
