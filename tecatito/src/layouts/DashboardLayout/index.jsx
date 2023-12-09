import React from "react";

import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import CustomAppBar from "../../components/custom/CustomAppBar";

import { useStyles } from "./dashboard_layout.styles";
import useDrawer from "../../hooks/useDrawer";
import CustomDrawer from "../../components/custom/CustomDrawer";
import useNavigation from "../../hooks/useNavigation";
const DasboardLayout = ({ publicNavigation, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { isMobileOpen, isExpanded, handleDrawerToggle } = useDrawer();
  const { navigateTo } = useNavigation();
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
          routes={publicNavigation}
          navigateTo={navigateTo}
        />
      </Hidden>

      <Hidden mdUp>
        <CustomDrawer
          open={isMobileOpen}
          variant="temporary"
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
        />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
      </main>
    </div>
  );
};
export default DasboardLayout;
