// NavLink.jsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const NavLink = ({ to, icon, text, handleDrawerClose }) => {
  return (
    <ListItem button component={RouterLink} to={to} onClick={handleDrawerClose}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {text && <ListItemText primary={text} />}
    </ListItem>
  );
};

export default NavLink;
