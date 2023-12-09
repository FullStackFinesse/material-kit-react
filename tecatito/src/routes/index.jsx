import React from "react";
import { Routes } from "react-router-dom";
import { publicNavigation } from "../utils/routes/navigationData";

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    return (
      <React.Fragment key={index}>
        {route.collapse ? (
          renderRoutes(route.collapse)
        ) : (
          <Routes path={route.route} element={<route.component />} />
        )}
      </React.Fragment>
    );
  });
};

const RoutesAll = () => {
  const publicRoutes = publicNavigation.reduce((acc, current) => [...acc, ...current.collapse], []);

  return <>{renderRoutes(publicRoutes)}</>;
};

export default RoutesAll;
