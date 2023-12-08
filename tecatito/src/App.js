import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardLayout from "./layouts/DashboardLayout";
import useDrawer from "./hooks/useDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // Estilos según tu implementación
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerOpen, handleDrawerClose } = useDrawer();

  return (
    <DashboardLayout
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      open={open}
      theme={theme}
    >
      {/* Contenido de tu aplicación */}
    </DashboardLayout>
  );
};

export default App;
