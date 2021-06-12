const User = require("../model/userSchema");

const deleteproject = async (req, res, next) => {
  try {
    const userID = req.body.pid;
    const projectID = req.body.sid;
    const rootUser = await User.updateOne(
      { '_id': userID }, 
      { $pull: { projects: { _id: projectID } } },);
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
module.exports = deleteproject;
