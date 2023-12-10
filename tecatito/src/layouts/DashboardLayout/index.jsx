// DashboardLayout.js
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import CustomAppBar from '../../components/custom/CustomAppBar';
import { useStyles } from './dashboard_layout.styles';
import useDrawer from '../../hooks/useDrawer';
import CustomDrawer from '../../components/custom/CustomDrawer';
import useRouteHandler from '../../hooks/useRouteHandler';

const DasboardLayout = ({ routes }) => {
  const classes = useStyles();
  const theme = useTheme();

  const { isMobileOpen, isExpanded, handleDrawerToggle } = useDrawer();

  const { selectedRoute, handleNavigate } = useRouteHandler(routes);

  return (
    <div className={classes.root}>
      <CustomAppBar
        open={isExpanded}
        position='left'
        handleDrawerClose={handleDrawerToggle}
        handleDrawerToggle={handleDrawerToggle}
        isPrivate={true}
      />

      <Hidden smDown>
        <CustomDrawer
          anchor='left'
          open={!isExpanded}
          variant='permanent'
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>

      <Hidden mdUp>
        <CustomDrawer
          open={isMobileOpen}
          variant='temporary'
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerToggle}
          theme={theme}
          routes={routes}
          navigateTo={handleNavigate}
        />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selectedRoute}
      </main>
    </div>
  );
};

export default DasboardLayout;
