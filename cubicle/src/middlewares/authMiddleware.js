const config = require("../config");
const jwt = require("../lib/jsonwebtoken");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (!token) {
    try {
      const decodedToken = await jwt.verify(token, config.SECRET);
      req.user = decodedToken;
      req.isAuthenticated = true;
    } catch (error) {
      console.error(error);
      res.clearCookie("auth");
    }
  }

  next();
};

exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated) {
    return res.redirect("/login");
  }

  next();
};
