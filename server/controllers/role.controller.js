const mongoose = require("mongoose");
const Role = require("../models/Role.js");

const createRole = async (req, res) => {
  try {
    const { name, description, permissions } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Role name is required",
      });
    }

    const existingRole = await Role.findOne({
      name: name.trim(),
    });

    if (existingRole) {
      return res.status(409).json({
        message: "Role already exists",
      });
    }

    const role = await Role.create({
      name,
      description,
      permissions: permissions || [],
    });

    return res.status(201).json({
      message: "Role created successfully",
      role,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getRoles = async (req, res) => {
  try {
    const filter = {};

    if (req.query.isActive !== undefined) {
      filter.isActive = req.query.isActive === "true";
    }

    const roles = await Role.find(filter).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      count: roles.length,
      roles,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getRoleById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid role ID",
      });
    }

    const role = await Role.findById(req.params.id);

    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    return res.status(200).json({
      role,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateRole = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid role ID",
      });
    }

    const role = await Role.findById(req.params.id);

    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    const allowedFields = [
      "name",
      "description",
      "permissions",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        role[field] = req.body[field];
      }
    });

    await role.save();

    return res.status(200).json({
      message: "Role updated successfully",
      role,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Role name already exists",
      });
    }

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deactivateRole = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid role ID",
      });
    }

    const role = await Role.findById(req.params.id);

    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    role.isActive = false;

    await role.save();

    return res.status(200).json({
      message: "Role deactivated successfully",
      role,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deactivateRole,
};