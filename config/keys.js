if (process.env.NODE_ENV === "production") {
  // production env - return prod keys
  module.exports = require("./prod");
} else {
  // development env - return dev keys
  module.exports = require("./dev");
}