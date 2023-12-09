import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./custom_drawer.styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const CustomDrawer = ({ theme, routes, navigateTo, ...props }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Drawer
      variant={props.variant}
      anchor={props.anchor}
      className={`${!props.open ? classes.drawerOpen : classes.drawer} ${
        props.open ? classes.drawerClose : classes.drawer
      }`}
      classes={{
        paper: `${classes.drawer} ${props.open ? classes.drawerClose : classes.drawerOpen}`,
      }}
      ModalProps={{
        keepMounted: true,
        BackdropProps: {
          invisible: true,
        },
      }}
      open={props.open}
      onClose={props.handleDrawerClose ? props.handleDrawerClose : null}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => props.handleDrawerClose()}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {routes.map((route, index) => (
        <List key={index}>
          <ListItem
            button
            onClick={() => navigateTo(route.path)}
            style={{ textDecoration: "none", padding: 6 }}
          >
            <ListItemIcon
              style={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              {route.icon}

              {isDesktop && props.open && <Typography variant="caption">{route.name}</Typography>}
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        </List>
      ))}

      <Divider />
      <List>sdad</List>
    </Drawer>
  );
};

export default CustomDrawer;
