// CustomDrawer.js
import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './custom_drawer.styles';
import useMedia from '../../../hooks/useMedia';
import ListItemContent from '../../ListItemContent';

const CustomDrawer = ({ theme, routes, navigateTo, ...props }) => {
  const classes = useStyles();
  const isDesktop = useMedia('(min-width: 960px)');
  const [activeRoute, setActiveRoute] = useState('');

  const handleActivation = (route) => {
    setActiveRoute(route);
  };
  return (
    <Drawer
      variant={props.variant}
      anchor={props.anchor}
      className={`${!props.open ? classes.drawerOpen : classes.drawer} ${
        props.open ? classes.drawerClose : classes.drawer
      }`}
      classes={{
        paper: `${classes.drawer} ${
          props.open ? classes.drawerClose : classes.drawerOpen
        }`,
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
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((route, index) => (
          <ListItemContent
            key={index}
            route={route}
            navigateTo={navigateTo}
            isDesktop={isDesktop}
            isOpen={props.open}
            handleActivation={handleActivation}
            activeRoute={activeRoute}
            {...props}
          />
        ))}
      </List>
      <Divider />
      <List>sdad</List>
    </Drawer>
  );
};

export default CustomDrawer;
