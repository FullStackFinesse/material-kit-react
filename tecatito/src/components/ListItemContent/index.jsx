import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";

const ListItemContent = ({
  route,
  navigateTo,
  isDesktop,
  isOpen,
  handleActivation,
  activeRoute,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (route.subRoutes) {
      setOpen(!open);
      handleActivation(route.path);
    } else {
      navigateTo(route.path);
      handleActivation(route.path);
    }
  };

  useEffect(() => {
    if (route.path === activeRoute) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeRoute, route.path]);

  return (
    <>
      <ListItem
        onClick={handleClick}
        style={{
          textDecoration: "none",
          padding: 6,
          cursor: "pointer",
          backgroundColor: route.path === activeRoute ? "rgba(150,250,10,0.8)" : "transparent",
        }}
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
          {isDesktop && isOpen && <Typography variant="caption">{route.name}</Typography>}
        </ListItemIcon>
        <ListItemText primary={route.name} />
        {route.subRoutes && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {route.subRoutes && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.subRoutes.map((subRoute, index) => (
              <ListItem
                key={index}
                onClick={() => navigateTo(subRoute.path)}
                style={{
                  textDecoration: "none",
                  padding: 6,
                  cursor: "pointer",
                  backgroundColor: route.path === activeRoute ? "salmon" : "transparent",
                }}
              >
                <ListItemIcon
                  style={{
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  {subRoute.icon}
                  {isDesktop && isOpen && (
                    <Typography variant="caption">{subRoute.name}</Typography>
                  )}
                </ListItemIcon>
                <ListItemText primary={subRoute.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListItemContent;
