const User = require("../model/userSchema");

const deleteskill = async (req, res, next) => {
  try {
    const userID = req.body.pid;
    const skillID = req.body.sid;
    const rootUser = await User.updateOne(
      { '_id': userID }, 
      { $pull: { skills: { _id: skillID } } },);
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(err);
  }
};
module.exports = deleteskill;
