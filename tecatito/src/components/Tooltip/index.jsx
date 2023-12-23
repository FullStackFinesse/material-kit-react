import { Popover, Transition } from '@headlessui/react';

import { Fragment, useRef } from 'react';
import { useStyles } from './tooltip.styles';
import { Grid, Typography } from '@material-ui/core';
const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
];

const Tooltip = () => {
  const classes = useStyles();
  const buttonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <div className={classes.popoverMayor}>
      <Popover className={classes.popoverMayor}>
        {({ open }) => {
          return (
            <>
              <div onMouseLeave={onMouseLeave.bind(null, open)}>
                <Grid
                  container
                  border='1px solid re'
                  justifyContent='space-between'
                >
                  <Popover.Button
                    ref={buttonRef}
                    className={`
                      ${open ? '' : 'text-opacity-90'}
                    `}
                    onMouseEnter={onMouseEnter.bind(null, open)}
                    onMouseLeave={onMouseLeave.bind(null, open)}
                  >
                    <span style={{ color: 'black' }}>Solutions</span>
                  </Popover.Button>

                  <Typography
                    component='button'
                    style={{ color: 'black' }}
                    onMouseEnter={onMouseEnter.bind(null, open)}
                    onMouseLeave={onMouseLeave.bind(null, open)}
                  >
                    Solutions
                  </Typography>
                </Grid>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover className={classes.popoverMayor}>
                    <div
                      className={classes.div}
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className={classes.popoverContent}>
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                          >
                            <div className={classes.option}>
                              <p>{item.name}</p>
                              <p>{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className={classes.documentation}>
                        <a href='##'>
                          <span>
                            <span>Documentation</span>
                          </span>
                          <span>Start integrating products and tools</span>
                        </a>
                      </div>
                    </div>
                  </Popover>
                </Transition>
              </div>
            </>
          );
        }}
      </Popover>
    </div>
  );
};

export default Tooltip;
