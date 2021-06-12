const User = require("../model/userSchema");

const deletesocial = async (req, res, next) => {
  try {
    const userID = req.body.pid;
    const socialID = req.body.sid;
    const rootUser = await User.updateOne(
      { '_id': userID }, 
      { $pull: { socials: { _id: socialID } } },);
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
module.exports = deletesocial;
