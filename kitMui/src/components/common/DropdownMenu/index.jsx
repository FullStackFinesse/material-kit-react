// DropdownMenu.js
import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setDropdown(null);
  //   setDropdownName("");
  //   setArrowRef(null);
  // };
  return (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
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
            <Typography variant="h1" color="white">
              <Icon ref={setArrowRef} className={classes.icon}>
                arrow_drop_up
              </Icon>
            </Typography>
            <Box className={classes.contentRoutes} p={2} mt={1}>
              {renderRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );
};

export default DropdownMenu;
