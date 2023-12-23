// import React from 'react';

// const ContactUs = () => {
//   return <div>ContactUs</div>;
// };

// export default ContactUs;
import React, { useRef } from 'react';
import { Button, Popover, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none', // Inicialmente, establece pointerEvents en 'none'
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const SimplePopover = () => {
  const classes = useStyles();
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  let timeout;

  const handlePopoverOpen = () => {
    clearTimeout(timeout);
    if (popoverRef.current) {
      popoverRef.current.style.pointerEvents = 'auto';
    }
  };

  const handlePopoverClose = () => {
    timeout = setTimeout(() => {
      if (popoverRef.current) {
        popoverRef.current.style.pointerEvents = 'none';
      }
    }, 200); // Ajusta la duración según tus necesidades
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        variant='contained'
        color='primary'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Open Popover
      </Button>
      <Popover
        id='mouse-over-popover'
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        anchorEl={buttonRef.current}
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
        ref={popoverRef}
      >
        <Typography>Popover Content</Typography>
      </Popover>
    </div>
  );
};

export default SimplePopover;
