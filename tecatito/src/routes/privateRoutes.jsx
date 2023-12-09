// App.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { privateNavigation } from "../utils/routes/navigationData";

const PrivateRoutes = () => {
  return <DashboardLayout routes={privateNavigation} />;
};

export default PrivateRoutes;
