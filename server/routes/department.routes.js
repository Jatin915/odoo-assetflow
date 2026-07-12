const express = require("express");

const {
  createDepartment,
  getDepartments,
  updateDepartment,
  deactivateDepartment
} = require("../controllers/department.controller.js");

const { protect } = require("../middlewares/authMiddleware.js");

const {
  authorizeRoles,
} = require("../middlewares/roleMiddleware.js");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  createDepartment
);

router.get(
  "/",
  protect,
  getDepartments
);

router.patch(
  "/:id",
  protect,
  authorizeRoles("ADMIN"),
  updateDepartment
);

router.patch(
  "/:id/deactivate",
  protect,
  authorizeRoles("ADMIN"),
  deactivateDepartment
);

module.exports = router;