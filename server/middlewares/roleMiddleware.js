const authorizeRoles = (...allowedRoles) => {

  return (req, res, next) => {
    console.log("USER ROLE:", req.user.role);
console.log("ALLOWED ROLES:", allowedRoles);
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    next();
  };
};

module.exports = { authorizeRoles };
