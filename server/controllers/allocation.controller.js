const mongoose = require("mongoose");
const Allocation = require("../models/Allocation");

exports.createAllocation = async (req, res) => {
    try {
        const allocation = await Allocation.create(req.body);

        res.status(201).json({
            success: true,
            message: "Allocation created successfully.",
            data: allocation,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.getAllocations = async (req, res) => {
    try {
        const filter = {};

        if (req.query.asset && mongoose.Types.ObjectId.isValid(req.query.asset))
            filter.asset = req.query.asset;

        if (req.query.employee && mongoose.Types.ObjectId.isValid(req.query.employee))
            filter.employee = req.query.employee;

        if (req.query.status)
            filter.status = req.query.status;

        const allocations = await Allocation.find(filter)
            .populate("asset")
            .populate("employee")
            .populate("allocatedBy")
            .populate("returnApprovedBy")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: allocations,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.getAllocationById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid allocation id.",
            });
        }

        const allocation = await Allocation.findById(req.params.id)
            .populate("asset")
            .populate("employee")
            .populate("allocatedBy")
            .populate("returnApprovedBy");

        if (!allocation) {
            return res.status(404).json({
                success: false,
                message: "Allocation not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: allocation,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.updateAllocation = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid allocation id.",
            });
        }

        const allocation = await Allocation.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )
            .populate("asset")
            .populate("employee")
            .populate("allocatedBy")
            .populate("returnApprovedBy");

        if (!allocation) {
            return res.status(404).json({
                success: false,
                message: "Allocation not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Allocation updated successfully.",
            data: allocation,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.deleteAllocation = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid allocation id.",
            });
        }

        const allocation = await Allocation.findByIdAndDelete(req.params.id);

        if (!allocation) {
            return res.status(404).json({
                success: false,
                message: "Allocation not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Allocation deleted successfully.",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};