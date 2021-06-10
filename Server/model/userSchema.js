const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/modimanju/image/upload/v1621875071/bofsljusosob4v39ktsf.png",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  exp: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  skills: [
    {
      skill: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  projects: [
    {
      projectpic: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true,
      },
    },
  ],
  socials: [
    {
      media: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Bcrypt(hashing) password
//------------------------
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//Token Generation
//----------------
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//Message Storing function
//-------------------------
userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};
//project Storing function
//-------------------------
userSchema.methods.addProject = async function (projectpic, url, details) {
  try {
    this.projects = this.projects.concat({ projectpic, url, details });
    await this.save();
    return this.projects;
  } catch (error) {
    console.log(error);
  }
};
//Socials Storing function
//-------------------------
userSchema.methods.addSocial = async function (media, link) {
  try {
    this.socials = this.socials.concat({ media, link });
    await this.save();
    return this.socials;
  } catch (error) {
    console.log(error);
  }
};
//Socials Storing function
//-------------------------
userSchema.methods.addSkill = async function (skill, value) {
  try {
    this.skills = this.skills.concat({ skill, value });
    await this.save();
    return this.skills;
  } catch (error) {
    console.log(error);
  }
};
const User = mongoose.model("USER", userSchema);

module.exports = User;
