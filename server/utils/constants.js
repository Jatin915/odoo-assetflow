const CONSTANTS = {
    // Asset Status
    ASSET_STATUS: {
        AVAILABLE: 'available',
        ALLOCATED: 'allocated',
        MAINTENANCE: 'maintenance',
        RETIRED: 'retired',
    },

    // Asset Condition
    ASSET_CONDITION: {
        GOOD: 'good',
        FAIR: 'fair',
        POOR: 'poor',
    },

    // Allocation Status
    ALLOCATION_STATUS: {
        ACTIVE: 'active',
        RETURNED: 'returned',
        PENDING: 'pending',
    },

    // Booking Status
    BOOKING_STATUS: {
        PENDING: 'pending',
        APPROVED: 'approved',
        REJECTED: 'rejected',
        CANCELLED: 'cancelled',
    },

    // Audit Cycle Status
    AUDIT_CYCLE_STATUS: {
        PLANNED: 'planned',
        ONGOING: 'ongoing',
        COMPLETED: 'completed',
    },

    // HTTP Status Codes
    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        INTERNAL_SERVER_ERROR: 500,
    },

    // Pagination
    PAGINATION: {
        DEFAULT_PAGE: 1,
        DEFAULT_LIMIT: 10,
        MAX_LIMIT: 100,
    },

    // User Providers
    USER_PROVIDERS: {
        LOCAL: 'local',
        GOOGLE: 'google',
    },

    // Error Messages
    ERROR_MESSAGES: {
        INVALID_ID: 'Invalid ID provided.',
        NOT_FOUND: 'Resource not found.',
        UNAUTHORIZED: 'Unauthorized access.',
        FORBIDDEN: 'Forbidden.',
        INTERNAL_ERROR: 'Internal server error.',
        VALIDATION_ERROR: 'Validation failed.',
        DUPLICATE_ENTRY: 'Duplicate entry detected.',
    },

    // Success Messages
    SUCCESS_MESSAGES: {
        CREATED: 'Resource created successfully.',
        UPDATED: 'Resource updated successfully.',
        DELETED: 'Resource deleted successfully.',
        RETRIEVED: 'Resource retrieved successfully.',
    },
};

module.exports = CONSTANTS;
