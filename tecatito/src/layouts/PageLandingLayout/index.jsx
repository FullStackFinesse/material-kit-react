// DashboardLayout.js
import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import CustomAppBar from '../../components/custom/CustomAppBar';
import { useStyles } from './page_landing_layout.styles';
import useDrawer from '../../hooks/useDrawer';
import CustomDrawer from '../../components/custom/CustomDrawer';
import useRouteHandler from '../../hooks/useRouteHandler';

const PageLandingLayout = ({ routes }) => {
  const classes = useStyles();
  const theme = useTheme();

  const { isMobileOpen, isExpanded, handleDrawerToggle } = useDrawer();
  const { selectedRoute, handleNavigate } = useRouteHandler(routes);
  return (
    <div className={classes.root}>
      <CustomAppBar
        open={!isExpanded}
        position='right'
        appBar={classes.appBar}
        toolbar={classes.toolbar}
        handleDrawerClose={handleDrawerToggle}
        handleDrawerToggle={handleDrawerToggle}
        isPublic={true}
        theme={theme}
        routes={routes}
        navigateTo={handleNavigate}
      />

      <Hidden xlDown>
        <CustomDrawer
          anchor='left'
          open={false}
          variant='permanent'
          handleDrawerToggle={false}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>

      <CustomDrawer
        open={isMobileOpen}
        anchor='right'
        variant='temporary'
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerToggle}
        theme={theme}
        routes={routes}
        navigateTo={handleNavigate}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selectedRoute}
      </main>
    </div>
  );
};

export default PageLandingLayout;
