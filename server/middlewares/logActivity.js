const ActivityLog = require('../models/ActivityLog');

const logActivity = async (req, res, next) => {
    try {
        const originalSend = res.send;

        res.send = function (data) {
            res.send = originalSend;

            if (req.user && ['POST', 'PUT', 'DELETE'].includes(req.method)) {
                const activityData = {
                    user: req.user._id,
                    action: req.method,
                    resource: req.baseUrl,
                    endpoint: req.originalUrl,
                    method: req.method,
                    statusCode: res.statusCode,
                    ipAddress: req.ip,
                    userAgent: req.get('user-agent'),
                    requestBody: req.method !== 'GET' ? req.body : undefined,
                };

                ActivityLog.create(activityData).catch(err =>
                    console.error('Failed to log activity:', err.message)
                );
            }

            return res.send(data);
        };

        next();
    } catch (err) {
        console.error('Activity logging middleware error:', err.message);
        next();
    }
};

module.exports = logActivity;
