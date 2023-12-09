import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import CustomAppBar from "../../components/custom/CustomAppBar";
import { useStyles } from "./dashboard_layout.styles";
import useDrawer from "../../hooks/useDrawer";
import CustomDrawer from "../../components/custom/CustomDrawer";
import { useLocation, useNavigate } from "react-router-dom";

const DasboardLayout = ({ routes, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobileOpen, isExpanded, handleDrawerToggle } = useDrawer();

  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    // Setear la ruta inicial al cargar la página
    const initialRoute = routes.find((route) => route.path === location.pathname);
    setSelectedRoute(initialRoute ? initialRoute.component : null);
  }, [location.pathname, routes]);

  const handleNavigate = (path) => {
    const selected = routes.find((route) => route.path === path);
    setSelectedRoute(selected ? selected.component : null);

    // Cerrar el drawer si está expandido
    if (isExpanded) {
      handleDrawerToggle();
    }

    // Navegar a la nueva ruta
    navigate(path);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar
        open={isExpanded}
        position="left"
        handleDrawerClose={handleDrawerToggle}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Hidden smDown>
        <CustomDrawer
          anchor="left"
          open={!isExpanded}
          variant="permanent"
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>

      <Hidden mdUp>
        <CustomDrawer
          open={isMobileOpen}
          variant="temporary"
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selectedRoute}
      </main>
    </div>
  );
};

export default DasboardLayout;
