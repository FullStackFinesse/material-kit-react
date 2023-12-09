// DashboardLayout.js
import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import CustomAppBar from "../../components/custom/CustomAppBar";
import { useStyles } from "./page_landing_layout.styles";
import useDrawer from "../../hooks/useDrawer";
import CustomDrawer from "../../components/custom/CustomDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import useMedia from "../../hooks/useMedia";

const PageLandingLayout = ({ routes, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobileOpen, isExpanded, handleDrawerToggle } = useDrawer();
  const isDesktop = useMedia("(min-width: 960px)"); // Utiliza el hook useMedia

  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    // Setear la ruta inicial al cargar la página
    const initialRoute = routes.find((route) => route.path === location.pathname);
    setSelectedRoute(initialRoute ? initialRoute.component : null);
  }, [location.pathname, routes]);

  const handleNavigate = (path) => {
    const selected = routes.find((route) => route.path === path);
    setSelectedRoute(selected ? selected.component : null);

    // Cerrar el drawer más rápidamente si estamos en un dispositivo de escritorio
    if (isDesktop && isExpanded) {
      handleDrawerToggle();
    }

    // Navegar a la nueva ruta
    navigate(path);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar
        open={!isExpanded}
        position="right"
        appBar={classes.appBar}
        toolbar={classes.toolbar}
        handleDrawerClose={handleDrawerToggle}
        handleDrawerToggle={handleDrawerToggle}
        isPublic={true}
        theme={theme}
        isDesktop={isDesktop}
        routes={routes}
        navigateTo={handleNavigate}
      />

      <Hidden xlDown>
        <CustomDrawer
          anchor="left"
          open={false}
          variant="permanent"
          handleDrawerToggle={false}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>

      <CustomDrawer
        open={isMobileOpen}
        anchor="right"
        variant="temporary"
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerToggle}
        theme={theme}
        routes={routes}
        navigateTo={handleNavigate}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selectedRoute}
      </main>
    </div>
  );
};

export default PageLandingLayout;
