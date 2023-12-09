// App.jsx
import React from "react";

import { publicNavigation } from "../utils/routes/navigationData";
import PageLandingLayout from "../layouts/PageLandingLayout";

const PublicRoutes = () => {
  return <PageLandingLayout routes={publicNavigation} />;
};

export default PublicRoutes;
