const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Auth Routes
const authRoutes = require("./routes/authRoutes.js");
const googleAuthRoutes = require("./routes/google.routes.js");

// Organization Routes
const departmentRoutes = require("./routes/department.routes.js");
const employeeRoutes = require("./routes/employee.routes.js");

// Asset Management Routes
const assetRoutes = require("./routes/asset.routes.js");
const allocationRoutes = require("./routes/allocation.routes.js");
const activityLogRoutes = require("./routes/activitylog.routes.js");
const assetCategoryRoutes = require("./routes/assetCategory.routes.js");

// Audit & Booking Routes
const auditCycleRoutes = require("./routes/auditCycle.routes.js");
const bookingRoutes = require("./routes/booking.routes.js");

// Maintenance Routes
const maintenanceRoutes = require("./routes/maintenance.routes.js");

// Resource Routes
const resourceRoutes = require("./routes/resource.routes.js");

// Role Routes
const roleRoutes = require("./routes/role.routes.js");

// Common Middlewares
const {
  requestLogger,
  errorHandler,
  rateLimiter,
} = require("./middlewares");

const app = express();

// Global Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(requestLogger);
app.use(rateLimiter());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Auth
app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuthRoutes);

// Organization
app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);

// Asset Management
app.use("/api/assets", assetRoutes);
app.use("/api/allocations", allocationRoutes);
app.use("/api/activity-logs", activityLogRoutes);
app.use("/api/asset-categories", assetCategoryRoutes);

// Audit & Booking
app.use("/api/audit-cycles", auditCycleRoutes);
app.use("/api/bookings", bookingRoutes);

// Maintenance
app.use("/api/maintenance", maintenanceRoutes);

// Resource
app.use("/api/resources", resourceRoutes);

// Role
app.use("/api/roles", roleRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "AssetFlow API running",
  });
});

// Error Handler must stay last
app.use(errorHandler);

module.exports = app;