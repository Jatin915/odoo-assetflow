const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth/google.routes.js');
const assetRoutes = require('./routes/asset.routes.js');
const allocationRoutes = require('./routes/allocation.routes.js');
const activityLogRoutes = require('./routes/activitylog.routes.js');
const assetCategoryRoutes = require('./routes/assetCategory.routes.js');
const auditCycleRoutes = require('./routes/auditCycle.routes.js');
const bookingRoutes = require('./routes/booking.routes.js');

const { requestLogger, errorHandler, rateLimiter } = require('./middlewares');

const app = express();

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

app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/asset-categories', assetCategoryRoutes);
app.use('/api/audit-cycles', auditCycleRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'AssetFlow API running',
  });
});

app.use(errorHandler);

module.exports = app;
