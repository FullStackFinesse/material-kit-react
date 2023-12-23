// DropdownAndDropup.js
import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Box,
} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useStyles } from './dropdown_and_dropup.styles';

const DropdownAndDropup = ({ title, options, customStyles, className }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  return (
    <div
      onClick={handleClose}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleClose}
      className={`${classes.root} ${className}`}
    >
      <Box className={classes.dropUnIcon}>
        <Typography className={classes.typography}>{title} </Typography>
        <ArrowDropUpIcon
          aria-haspopup='true'
          onClick={handleMouseEnter}
          onMouseLeave={handleClose}
          className={`${classes.iconButton} ${
            anchorEl ? classes.rotatedIcon : ''
          }`}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onMouseLeave={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          className: `${classes.menuPaper} ${className}`,
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownAndDropup;
