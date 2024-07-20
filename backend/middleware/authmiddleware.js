const User = require("../models/userRegistration");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// verify the user using token cookies
const verifyuser = (req, res, next) => {
  const token = req.cookies.token;
  console.log("token", token);
  if (!token) {
    return res.json("Login to perform this task");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    console.log("user details", verified.ph);
    next();
  } catch (error) {
    res.status(401).json("error occured");
  }
};

module.exports = { verifyuser };
