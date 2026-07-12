const express = require("express");

const {
  createMaintenance,
  getMaintenances,
  updateMaintenance,
  getMaintenanceById
} = require("../controllers/maintenance.controller.js");

const { protect } = require("../middlewares/authMiddleware.js");

const {
  authorizeRoles,
} = require("../middlewares/roleMiddleware.js");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("ADMIN", "ASSET_MANAGER", "DEPARTMENT_HEAD"),
  createMaintenance
);

router.get(
  "/",
  protect,
  authorizeRoles("ADMIN", "ASSET_MANAGER", "DEPARTMENT_HEAD"),
  getMaintenances
);

router.patch(
  "/:id",
  protect,
  authorizeRoles("ADMIN", "ASSET_MANAGER"),
  updateMaintenance
);

router.get(
  "/:id",
  protect,
  authorizeRoles("ADMIN", "ASSET_MANAGER", "DEPARTMENT_HEAD"),
  getMaintenanceById
);

module.exports = router;