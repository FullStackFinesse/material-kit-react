import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core';
const ListItemContent = ({
  route,
  navigateTo,
  isDesktop,
  isOpen,
  handleActivation,
  activeRoute,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
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
          textDecoration: 'none',
          padding: 3,
          cursor: 'pointer',
          position: 'relative',
          // border: '1px solid rgba(0, 0, 0, 0.2)',
          justifyContent: 'flex-start',

          backgroundColor:
            route.path === activeRoute ? 'rgba(150,250,10,0.8)' : 'transparent',
        }}
      >
        <ListItemIcon
          style={{
            width: theme.spacing(3) + 3,
            padding: props.open
              ? theme.spacing(0, 2, 0, 2)
              : theme.spacing(1, 0, 1, 0),
            // border: '1px solid red',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: props.open ? 5 : '',
          }}
        >
          {route.icon}
          {isDesktop && isOpen && (
            <Typography
              variant='caption'
              style={{
                fontSize: '10px',
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {route.name}
            </Typography>
          )}
        </ListItemIcon>
        <ListItemText primary={route.name} />
        {route.subRoutes && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {route.subRoutes && (
        <Collapse
          in={open}
          timeout='auto'
          unmountOnExit
        >
          <List
            component='div'
            disablePadding
          >
            {route.subRoutes.map((subRoute, index) => (
              <ListItem
                key={index}
                onClick={() => navigateTo(subRoute.path)}
                style={{
                  textDecoration: 'none',
                  padding: 3,
                  cursor: 'pointer',
                  fontSize: '5px',
                  color: 'white',
                  backgroundColor:
                    route.path === activeRoute ? 'salmon' : 'transparent',
                }}
              >
                <ListItemIcon
                  style={{
                    padding: props.open
                      ? theme.spacing(0, 2, 0, 2)
                      : theme.spacing(1, 0, 1, 0),
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginRight: props.open ? 5 : '',
                    // border: '1px solid blue',
                  }}
                >
                  {subRoute.icon}
                  {isDesktop && isOpen && (
                    <Typography
                      variant='caption'
                      style={{
                        fontSize: '10px',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {subRoute.name}
                    </Typography>
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
