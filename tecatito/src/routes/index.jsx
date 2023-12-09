import React from "react";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import AboutUs from "../pages/LandingPages/AboutUs";
import Main from "../pages/Dashboard/Main";
const Routes = () => {
  const isAutenticated = false;
  return <div>{isAutenticated ? <PrivateRoutes /> : <PublicRoutes />}</div>;
};

export default Routes;
