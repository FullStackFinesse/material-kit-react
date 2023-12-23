import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  paper: {
    padding: '20px',
    width: '14vw',
  },
  subroutesContainer: {
    marginTop: '10px',
  },
  navbarItem: {
    cursor: 'pointer',
    marginRight: '20px',
  },
  appBar: {
    backgroundColor: '#2196F3',
  },
  title: {
    flexGrow: 1,
  },
};

// ... (resto del código)

const Catalogo = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const containerRef = useRef(null);

  const handlePopoverOpen = (event, popoverId) => {
    setAnchorEl(event.currentTarget);
    setOpenedPopoverId(popoverId);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const handleContainerEnter = () => {
    clearTimeout(closeTimeoutRef.current);
  };

  const handleContainerLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      if (containerRef.current && !containerRef.current.mouseOverContainer) {
        setAnchorEl(null);
        setOpenedPopoverId(null);
      }
    }, 200);
  };

  const handlePopoverContentEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    containerRef.current.mouseOverContainer = true;
  };

  const handlePopoverContentLeave = () => {
    containerRef.current.mouseOverContainer = false;
    handleContainerLeave();
  };

  const closeTimeoutRef = useRef(null);

  const multi = [
    {
      _id: 0,
      name: 'name1',
      subroutes: [
        { linkurl: '#', hovertext: 'text1' },
        { linkurl: '#', hovertext: 'text2' },
      ],
    },
    {
      _id: 1,
      name: 'name2',
      subroutes: [
        { linkurl: '#', hovertext: 'text3' },
        { linkurl: '#', hovertext: 'text4' },
      ],
    },
    {
      _id: 2,
      name: 'name3',
      subroutes: [
        { linkurl: '#', hovertext: 'text5' },
        { linkurl: '#', hovertext: 'text6' },
      ],
    },
    {
      _id: 3,
      name: 'name4',
      href: '#',
    },
    {
      _id: 4,
      name: 'nameolo',
      subroutes: [
        { linkurl: '#', hovertext: 'text7' },
        { linkurl: '#', hovertext: 'text8' },
      ],
    },
    {
      _id: 5,
      name: 'name5',
      href: '#',
    },
  ];

  return (
    <div>
      <AppBar
        position='static'
        className={classes.appBar}
      >
        <Toolbar>
          {multi.map((m) => (
            <div
              key={m._id}
              onMouseEnter={(e) => handlePopoverOpen(e, m._id)}
              onMouseLeave={handlePopoverClose}
              className={classes.navbarItem}
            >
              <Typography>{m.name}</Typography>
              <div
                ref={containerRef}
                onMouseEnter={handleContainerEnter}
                onMouseLeave={handleContainerLeave}
              >
                <Popover
                  classes={{
                    paper: classes.paper,
                  }}
                  open={openedPopoverId === m._id}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  <div
                    className={classes.subroutesContainer}
                    onMouseEnter={handlePopoverContentEnter}
                    onMouseLeave={handlePopoverContentLeave}
                  >
                    {m.subroutes &&
                      m.subroutes.map((route, index) => (
                        <Button
                          href={route.linkurl}
                          target='_blank'
                          rel='noopener noreferrer'
                          key={index}
                          onClick={handlePopoverClose}
                        >
                          {route.hovertext}
                        </Button>
                      ))}
                  </div>
                </Popover>
              </div>
              {!m.subroutes && m.href && (
                <Typography>
                  <a
                    href={m.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ir a {m.name}
                  </a>
                </Typography>
              )}
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Catalogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Catalogo);
