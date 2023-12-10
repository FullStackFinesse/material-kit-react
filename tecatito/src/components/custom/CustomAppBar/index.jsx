import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './custom_appbar.styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Hidden, Box, Button } from '@material-ui/core';
const CustomAppBar = ({ isPrivate, isPublic, routes, position, ...props }) => {
  const classes = useStyles({ position });
  const navigate = useNavigate();
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
              {' '}
              <Grid>
                {/* consumir rutas publicas publicNavigation con menu de material uiy al acencarnos
                aparecera sus subrutas */}
                <Grid
                  container
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='row'
                  border={2}
                >
                  <Grid item>
                    {routes.map((prop, key) => (
                      <Button onClick={() => navigate(prop.path)}>
                        {prop.icon}
                        {prop.name}

                        {prop.link}
                      </Button>
                    ))}
                  </Grid>
                </Grid>
              </Grid>{' '}
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
          }
         
          `}
        >
          <MenuIcon />
        </IconButton>{' '}
        {isPrivate && <Typography variant='h6'>Logo Privaate</Typography>}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
