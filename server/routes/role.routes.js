const express = require("express");

const {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deactivateRole,
} = require("../controllers/role.controller.js");

const { protect } = require("../middlewares/authMiddleware.js");

const {
  authorizeRoles,
} = require("../middlewares/roleMiddleware.js");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  createRole
);

router.get(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  getRoles
);

router.get(
  "/:id",
  protect,
  authorizeRoles("ADMIN"),
  getRoleById
);

router.patch(
  "/:id",
  protect,
  authorizeRoles("ADMIN"),
  updateRole
);

router.patch(
  "/:id/deactivate",
  protect,
  authorizeRoles("ADMIN"),
  deactivateRole
);

module.exports = router;