import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomAppBar from "../../components/custom/CustomAppbar";
import CustomDrawer from "../../components/custom/CustomDrawer";

const DashboardLayout = ({ children, handleDrawerOpen, handleDrawerClose, open, theme }) => {
  return (
    <div>
      <CssBaseline />
      <CustomAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <CustomDrawer open={open} handleDrawerClose={handleDrawerClose} theme={theme} />
      <main>
        <div />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
