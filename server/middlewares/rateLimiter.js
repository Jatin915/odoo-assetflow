const rateLimiter = (maxRequests = 100, windowMs = 15 * 60 * 1000) => {
    const requests = new Map();

    return (req, res, next) => {
        const ip = req.ip;
        const now = Date.now();
        const userRequests = requests.get(ip) || [];

        // Remove old requests outside the window
        const recentRequests = userRequests.filter(time => now - time < windowMs);

        if (recentRequests.length >= maxRequests) {
            return res.status(429).json({
                success: false,
                message: 'Too many requests. Please try again later.',
            });
        }

        recentRequests.push(now);
        requests.set(ip, recentRequests);

        // Cleanup old entries
        if (requests.size > 10000) {
            requests.clear();
        }

        next();
    };
};

module.exports = rateLimiter;
