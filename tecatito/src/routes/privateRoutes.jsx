// App.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { publicNavigation } from "../utils/routes/navigationData";

const PrivateRoutes = () => {
  return <DashboardLayout routes={publicNavigation} />;
};

export default PrivateRoutes;
