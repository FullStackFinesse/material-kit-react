// DropdownMenu.js
import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useStyles } from './dropdownMenuStyles';
const DropdownMenu = ({
  dropdown,
  dropdownEl,
  setDropdown,
  setDropdownName,
  nestedDropdown,
  renderRoutes,
  setArrowRef,
  arrowRef,
}) => {
  const classes = useStyles();
  return (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement='top-start'
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName('');
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: 'left top',

            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Box className={classes.content}>
            <Box
              className={classes.triangle}
              ref={setArrowRef}
            ></Box>
            <Box
              className={classes.contentRoutes}
              p={2}
            >
              {renderRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );
};

export default DropdownMenu;
