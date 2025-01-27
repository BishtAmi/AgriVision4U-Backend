require("dotenv").config();
const jwt = require("jsonwebtoken");

const createSecretToken = (id, name, ph) => {
  return jwt.sign({ id, name, ph }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports = createSecretToken;
