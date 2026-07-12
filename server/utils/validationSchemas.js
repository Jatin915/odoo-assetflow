const Joi = require('joi');

// Activity Log Schemas
const createActivityLogSchema = Joi.object({
    user: Joi.string().required(),
    action: Joi.string().valid('POST', 'PUT', 'DELETE', 'GET').required(),
    resource: Joi.string().required(),
    endpoint: Joi.string().required(),
    method: Joi.string().required(),
    statusCode: Joi.number().required(),
    ipAddress: Joi.string().required(),
    userAgent: Joi.string().allow(''),
    requestBody: Joi.any(),
    description: Joi.string().allow(''),
});

// Allocation Schemas
const createAllocationSchema = Joi.object({
    asset: Joi.string().required(),
    employee: Joi.string().required(),
    allocationDate: Joi.date().required(),
    allocatedBy: Joi.string().required(),
    status: Joi.string().valid('active', 'returned', 'pending').default('active'),
    notes: Joi.string().allow(''),
});

const updateAllocationSchema = Joi.object({
    asset: Joi.string(),
    employee: Joi.string(),
    status: Joi.string().valid('active', 'returned', 'pending'),
    returnDate: Joi.date(),
    returnApprovedBy: Joi.string(),
    notes: Joi.string().allow(''),
});

// Asset Schemas
const createAssetSchema = Joi.object({
    assetTag: Joi.string().required(),
    name: Joi.string().required(),
    serialNumber: Joi.string().required(),
    model: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
    purchaseDate: Joi.date().required(),
    purchasePrice: Joi.number().positive().required(),
    status: Joi.string().valid('available', 'allocated', 'maintenance', 'retired').default('available'),
    condition: Joi.string().valid('good', 'fair', 'poor').default('good'),
    description: Joi.string().allow(''),
});

const updateAssetSchema = Joi.object({
    name: Joi.string(),
    status: Joi.string().valid('available', 'allocated', 'maintenance', 'retired'),
    condition: Joi.string().valid('good', 'fair', 'poor'),
    currentEmployee: Joi.string(),
    currentDepartment: Joi.string(),
    description: Joi.string().allow(''),
});

// Asset Category Schemas
const createAssetCategorySchema = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string().allow(''),
    parentCategory: Joi.string().allow(null),
    isActive: Joi.boolean().default(true),
});

const updateAssetCategorySchema = Joi.object({
    name: Joi.string(),
    description: Joi.string().allow(''),
    parentCategory: Joi.string().allow(null),
    isActive: Joi.boolean(),
});

// Audit Cycle Schemas
const createAuditCycleSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    createdBy: Joi.string().required(),
    status: Joi.string().valid('planned', 'ongoing', 'completed').default('planned'),
});

const updateAuditCycleSchema = Joi.object({
    name: Joi.string(),
    description: Joi.string().allow(''),
    endDate: Joi.date(),
    status: Joi.string().valid('planned', 'ongoing', 'completed'),
});

// Booking Schemas
const createBookingSchema = Joi.object({
    resource: Joi.string().required(),
    bookedBy: Joi.string().required(),
    startAt: Joi.date().required(),
    endAt: Joi.date().required(),
    purpose: Joi.string().required(),
    status: Joi.string().valid('pending', 'approved', 'rejected', 'cancelled').default('pending'),
    notes: Joi.string().allow(''),
});

const updateBookingSchema = Joi.object({
    startAt: Joi.date(),
    endAt: Joi.date(),
    purpose: Joi.string(),
    status: Joi.string().valid('pending', 'approved', 'rejected', 'cancelled'),
    approvedBy: Joi.string(),
    notes: Joi.string().allow(''),
});

module.exports = {
    createActivityLogSchema,
    createAllocationSchema,
    updateAllocationSchema,
    createAssetSchema,
    updateAssetSchema,
    createAssetCategorySchema,
    updateAssetCategorySchema,
    createAuditCycleSchema,
    updateAuditCycleSchema,
    createBookingSchema,
    updateBookingSchema,
};
