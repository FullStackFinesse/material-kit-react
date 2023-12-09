import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./custom_appbar.styles";
const CustomAppBar = ({ ...props }) => {
  const classes = useStyles();

  return (
    <AppBar className={`${props.open ? classes.appBarShift : classes.appBar} ${props.appBar}`}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            props.handleDrawerToggle(); // Asegúrate de que handleDrawerToggle es la función correcta
          }}
          edge="start"
          className={`${props.open ? classes.extendButtonHidden : classes.menuButton}
         
          `}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Persistent drawer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
