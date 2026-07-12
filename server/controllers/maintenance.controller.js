const Maintenance = require("../models/Maintenance.js");
const Asset = require("../models/Asset.js");

// Register Employee model for populate
require("../models/Employee.js");

const createMaintenance = async (req, res) => {
  try {
    const {
      asset,
      reportedBy,
      assignedTechnician,
      type,
      priority,
      issueDescription,
      nextServiceDate,
    } = req.body;

    if (!asset || !issueDescription) {
      return res.status(400).json({
        message: "Asset and issue description are required",
      });
    }

    const existingAsset = await Asset.findById(asset);

    if (!existingAsset) {
      return res.status(404).json({
        message: "Asset not found",
      });
    }

    const maintenance = await Maintenance.create({
      asset,
      reportedBy: reportedBy || null,
      assignedTechnician: assignedTechnician || null,
      type,
      priority,
      issueDescription,
      nextServiceDate: nextServiceDate || null,
    });

    return res.status(201).json({
      message: "Maintenance request created successfully",
      maintenance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.find()
      .populate("asset", "assetTag name status condition")
      .populate("reportedBy", "employeeId firstName lastName")
      .populate("assignedTechnician", "employeeId firstName lastName")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      count: maintenances.length,
      maintenances,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateMaintenance = async (req, res) => {
  try {
    const { id } = req.params;

    const maintenance = await Maintenance.findById(id);

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    const allowedFields = [
      "assignedTechnician",
      "type",
      "priority",
      "status",
      "issueDescription",
      "resolutionNotes",
      "cost",
      "nextServiceDate",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        maintenance[field] = req.body[field];
      }
    });

    if (req.body.status === "in_progress" && !maintenance.startedAt) {
      maintenance.startedAt = new Date();

      await Asset.findByIdAndUpdate(maintenance.asset, {
        status: "maintenance",
      });
    }

    if (
      ["resolved", "closed"].includes(req.body.status) &&
      !maintenance.completedAt
    ) {
      maintenance.completedAt = new Date();
    }

    await maintenance.save();

    return res.status(200).json({
      message: "Maintenance updated successfully",
      maintenance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id)
      .populate("asset", "assetTag name status condition")
      .populate("reportedBy", "employeeId firstName lastName")
      .populate("assignedTechnician", "employeeId firstName lastName");

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    return res.status(200).json({
      maintenance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createMaintenance,
  getMaintenances,
  updateMaintenance,
  getMaintenanceById
};