const Department = require("../models/Department.js");
require("../models/Employee.js");

const createDepartment = async (req, res) => {
  try {
    const {
      name,
      code,
      description,
      manager,
      parentDepartment,
    } = req.body;

    if (!name || !code) {
      return res.status(400).json({
        message: "Name and code are required",
      });
    }

    const existingDepartment = await Department.findOne({
      $or: [
        { name: name.trim() },
        { code: code.trim().toUpperCase() },
      ],
    });

    if (existingDepartment) {
      return res.status(409).json({
        message: "Department name or code already exists",
      });
    }

    if (parentDepartment) {
      const parentExists = await Department.findOne({
        _id: parentDepartment,
        isActive: true,
      });

      if (!parentExists) {
        return res.status(400).json({
          message: "Parent department is invalid or inactive",
        });
      }
    }

    const department = await Department.create({
      name,
      code,
      description,
      manager: manager || null,
      parentDepartment: parentDepartment || null,
    });

    return res.status(201).json({
      message: "Department created successfully",
      department,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("manager", "firstName lastName email")
      .populate("parentDepartment", "name code")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      count: departments.length,
      departments,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      code,
      description,
      manager,
      parentDepartment,
    } = req.body;

    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({
        message: "Department not found",
      });
    }

    if (
      parentDepartment &&
      parentDepartment.toString() === id
    ) {
      return res.status(400).json({
        message: "Department cannot be its own parent",
      });
    }

    if (name !== undefined) department.name = name;
    if (code !== undefined) department.code = code;
    if (description !== undefined) department.description = description;

    if (manager !== undefined) {
      department.manager = manager || null;
    }

    if (parentDepartment !== undefined) {
      department.parentDepartment = parentDepartment || null;
    }

    await department.save();

    return res.status(200).json({
      message: "Department updated successfully",
      department,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Department name or code already exists",
      });
    }

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deactivateDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({
        message: "Department not found",
      });
    }

    if (!department.isActive) {
      return res.status(400).json({
        message: "Department is already inactive",
      });
    }

    department.isActive = false;

    await department.save();

    return res.status(200).json({
      message: "Department deactivated successfully",
      department,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  updateDepartment,
  deactivateDepartment
};