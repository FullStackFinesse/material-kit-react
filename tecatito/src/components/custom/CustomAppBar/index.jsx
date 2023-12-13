import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './custom_appbar.styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Hidden, Box } from '@material-ui/core';
import DropdownAndDropup from '../../DropdownAndDropup';

const CustomAppBar = ({ isPrivate, isPublic, routes, position, ...props }) => {
  const classes = useStyles({ position });
  const navigate = useNavigate();

  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <Grid key={key}>
        {route.subRoutes ? (
          // Renderizar el DropdownAndDropup solo si hay subrutas
          <DropdownAndDropup
            title={route.name}
            options={renderRoutes(route.subRoutes)}
            className={classes.itemLink}
          />
        ) : (
          // Renderizar solo la ruta si no hay subrutas
          <Typography
            component='button'
            onClick={() => navigate(route.path)}
            key={key}
            variant='body1'
          >
            {route.name}
          </Typography>
        )}
      </Grid>
    ));
  };

  return (
    <AppBar
      className={`${props.open ? classes.appBarShift : classes.appBar} ${
        props.appBar
      }`}
    >
      <Toolbar className={`${classes.toolbar} ${props.toolbar}`}>
        {isPublic && (
          <Grid
            container
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h6'>Logo Privaasdsdte</Typography>
            <Hidden smDown>
              <Grid className={classes.navLink}>
                <Grid
                  container
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='row'
                  backgroundColor=''
                  border={2}
                  item
                >
                  {renderRoutes(routes)}
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        )}
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => {
            props.handleDrawerToggle(); // Asegúrate de que handleDrawerToggle es la función correcta
          }}
          edge='start'
          className={`${
            props.open ? classes.extendButtonHidden : classes.menuButton
          }`}
        >
          <MenuIcon />
        </IconButton>
        {isPrivate && <Typography variant='h6'>Logo Privaate</Typography>}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
