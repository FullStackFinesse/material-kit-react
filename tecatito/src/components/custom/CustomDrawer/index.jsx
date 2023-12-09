import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./custom_drawer.styles";
import { CollapsibleList, DropdownList, SimpleList } from "../../ReusableComponents";

const CustomDrawer = ({ theme, routes, navigateTo, ...props }) => {
  const classes = useStyles();

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
      <SimpleList items={routes} navigateTo={navigateTo} />
      <CollapsibleList items={routes} navigateTo={navigateTo} />
      <DropdownList items={routes[0].collapse[0].collapse} navigateTo={navigateTo} />
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
