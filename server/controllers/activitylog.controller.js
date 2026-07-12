const mongoose = require("mongoose");
const ActivityLog = require("../models/ActivityLog");

exports.createActivityLog = async (req, res) => {
    try {
        const activityLog = await ActivityLog.create(req.body);

        res.status(201).json({
            success: true,
            message: "Activity log created successfully.",
            data: activityLog,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.getActivityLogs = async (req, res) => {
    try {
        const activityLogs = await ActivityLog.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: activityLogs,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.getActivityLogById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid activity log id.",
            });
        }

        const activityLog = await ActivityLog.findById(req.params.id);

        if (!activityLog) {
            return res.status(404).json({
                success: false,
                message: "Activity log not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: activityLog,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.updateActivityLog = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid activity log id.",
            });
        }

        
        const activityLog = await ActivityLog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!activityLog) {
            return res.status(404).json({
                success: false,
                message: "Activity log not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Activity log updated successfully.",
            data: activityLog,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

exports.deleteActivityLog = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid activity log id.",
            });
        }

        const activityLog = await ActivityLog.findByIdAndDelete(req.params.id);

        if (!activityLog) {
            return res.status(404).json({
                success: false,
                message: "Activity log not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Activity log deleted successfully.",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};