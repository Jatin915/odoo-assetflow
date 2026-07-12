const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes.js");
const departmentRoutes = require("./routes/department.routes.js");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AssetFlow API running",
  });
});

module.exports = app;