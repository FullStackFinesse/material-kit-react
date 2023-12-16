// RenderNestedRoutes.js
import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MuiLink from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import { Box } from '@mui/material';

const RenderNestedRoutes = ({ routes, nestedDropdownName }) => (
  <>
    {routes.map(({ collapse, columns }) =>
      collapse && !columns
        ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
            let template;

            if (parentName === nestedDropdownName) {
              template =
                nestedCollapse &&
                nestedCollapse.map((item) => {
                  const linkComponent = {
                    component: MuiLink,
                    href: item.href,
                    target: '_blank',
                    rel: 'noreferrer',
                  };

                  const routeComponent = {
                    component: Link,
                    to: item.route,
                  };

                  return (
                    <Typography
                      key={item.name}
                      {...(item.route ? routeComponent : linkComponent)}
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      variant='button'
                      textTransform='capitalize'
                      minWidth={item.description ? '14rem' : '12rem'}
                      color={item.description ? 'dark' : 'text'}
                      fontWeight={item.description ? 'bold' : 'regular'}
                      py={item.description ? 1 : 0.625}
                      px={2}
                      sx={({
                        palette: { grey, dark },
                        // borders: { borderRadius },
                      }) => ({
                        // borderRadius: borderRadius.md,
                        cursor: 'pointer',
                        transition: 'all 300ms linear',

                        '&:hover': {
                          backgroundColor: grey[200],
                          // color: dark.main,

                          '& *': {
                            // color: dark.main,
                          },
                        },
                      })}
                    >
                      {item.description ? (
                        <Box>
                          {item.name}
                          <Typography
                            display='block'
                            variant='button'
                            color='text'
                            fontWeight='regular'
                            sx={{ transition: 'all 300ms linear' }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      ) : (
                        item.name
                      )}
                      {item.collapse && (
                        <Icon
                          fontSize='small'
                          sx={{
                            fontWeight: 'normal',
                            verticalAlign: 'middle',
                            mr: -0.5,
                          }}
                        >
                          keyboard_arrow_right
                        </Icon>
                      )}
                    </Typography>
                  );
                });
            }

            return template;
          })
        : null
    )}
  </>
);

export default RenderNestedRoutes;
