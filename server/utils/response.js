const sendResponse = (res, statusCode, success, message, data = null) => {
    const response = {
        success,
        message,
    };

    if (data !== null) {
        response.data = data;
    }

    return res.status(statusCode).json(response);
};

const sendSuccess = (res, statusCode, message, data = null) => {
    return sendResponse(res, statusCode, true, message, data);
};

const sendError = (res, statusCode, message) => {
    return sendResponse(res, statusCode, false, message);
};

const sendPaginatedResponse = (res, statusCode, message, data, pagination) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        pagination,
    });
};

module.exports = {
    sendResponse,
    sendSuccess,
    sendError,
    sendPaginatedResponse,
};
