const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const protect = async (req, res, next) => {
  console.log("Middleware hit.")
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.userId)
      .select("-password")
      .lean();

    if (!user) {
      return res.status(401).json({
        message: "User no longer exists",
      });
    }

    if (user.status === "INACTIVE") {
      return res.status(403).json({
        message: "Account is inactive",
      });
    }

    req.user = user;

    console.log("REQ.USER BEFORE NEXT:", req.user);
    console.log("REQ.USER ROLE BEFORE NEXT:", req.user.role);
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = {protect};