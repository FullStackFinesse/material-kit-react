// DropdownAndDropup.js
import React, { useState } from 'react';
import { Menu, MenuItem, Button, IconButton } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useStyles } from './dropdown_and_dropup.styles';

const DropdownAndDropup = ({ title, options, customStyles, className }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleClose}
      className={`${classes.root} ${className}`}
    >
      <Button className={classes.button}>
        {title} {/* Mostrar el título en el botón */}
        <ArrowDropUpIcon
          aria-haspopup='true'
          onClick={handleMouseEnter}
          onMouseLeave={handleClose}
          className={`${classes.iconButton} ${
            anchorEl ? classes.rotatedIcon : ''
          }`}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
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