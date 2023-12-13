import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import useStyles from './popoverStyles';

const Menu = ({ data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {data.map((item, index) => (
        <Typography
          key={index}
          aria-owns={open ? `mouse-over-popover-${index}` : undefined}
          aria-haspopup='true'
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {item.label}
        </Typography>
      ))}
      {data.map((item, index) => (
        <Popover
          key={index}
          id={`mouse-over-popover-${index}`}
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open && anchorEl === item.id}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{item.content}</Typography>
        </Popover>
      ))}
    </div>
  );
};

export default Menu;
