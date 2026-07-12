const Employee = require('../models/Employee');
const Role = require('../models/Role');

const authorize = (allowedPermissions = []) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'Unauthorized. Please authenticate first.',
                });
            }

            const employee = await Employee.findOne({ user: req.user._id })
                .populate('role');

            if (!employee) {
                return res.status(403).json({
                    success: false,
                    message: 'Employee record not found.',
                });
            }

            if (!employee.role) {
                return res.status(403).json({
                    success: false,
                    message: 'No role assigned to this employee.',
                });
            }

            const hasPermission = allowedPermissions.length === 0 ||
                allowedPermissions.some(perm =>
                    employee.role.permissions.includes(perm)
                );

            if (!hasPermission) {
                return res.status(403).json({
                    success: false,
                    message: 'Insufficient permissions to perform this action.',
                });
            }

            req.employee = employee;
            next();
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Authorization failed.',
                error: err.message,
            });
        }
    };
};

module.exports = authorize;
