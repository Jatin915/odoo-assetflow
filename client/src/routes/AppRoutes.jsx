import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import OrganizationSetup from "../pages/OrganizationSetup";
import Assets from "../pages/Assets";
import AllocationTransfer from "../pages/AllocationTransfer";
import ResourceBooking from "../pages/ResourceBooking";
import Maintenance from "../pages/Maintenance";
import Audit from "../pages/Audit";
import Reports from "../pages/Reports";
import Notifications from "../pages/Notifications";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organization" element={<OrganizationSetup />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/allocation" element={<AllocationTransfer />} />
        <Route path="/booking" element={<ResourceBooking />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}