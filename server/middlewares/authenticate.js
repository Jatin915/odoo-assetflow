const { verifyJwt, extractBearerToken } = require('../config/jwt');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    try {
        const token = extractBearerToken(req.headers.authorization);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided. Please log in.',
            });
        }

        const decoded = verifyJwt(token);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found.',
            });
        }

        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token.',
            error: err.message,
        });
    }
};

module.exports = authenticate;
