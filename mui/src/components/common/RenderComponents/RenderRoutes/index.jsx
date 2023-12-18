// RenderRoutes.js
import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MKTypography from 'components/MKTypography'
import { Link } from 'react-router-dom'
import MuiLink from '@mui/material/Link'
import Icon from '@mui/material/Icon'
import MKBox from 'components/MKBox'

const RenderRoutes = ({
  routes,
  dropdownName,
  setNestedDropdown,
  setNestedDropdownEl,
  setNestedDropdownName,
}) => (
  <>
    {routes.map(({ name, collapse, columns, rowsPerColumn }) => {
      let template
      // Render the dropdown menu that should be display as columns
      if (collapse && columns && name === dropdownName) {
        const calculateColumns = collapse.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / rowsPerColumn)
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
          }
          resultArray[chunkIndex].push(item)
          return resultArray
        }, [])
        template = (
          <Grid key={name} container spacing={3} py={1} px={1.5}>
            {calculateColumns.map((cols, key) => {
              const gridKey = `grid-${key}`
              const dividerKey = `divider-${key}`
              return (
                <Grid
                  key={gridKey}
                  item
                  xs={12 / columns}
                  sx={{ position: 'relative' }}
                >
                  {cols.map((col, index) => (
                    <Fragment key={col.name}>
                      <MKTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                        py={1}
                        px={0.5}
                        mt={index !== 0 ? 2 : 0}
                      >
                        {col.name}
                      </MKTypography>
                      {col.collapse.map((item) => (
                        <MKTypography
                          key={item.name}
                          component={item.route ? Link : MuiLink}
                          to={item.route ? item.route : ''}
                          href={
                            item.href ? item.href : (e) => e.preventDefault()
                          }
                          target={item.href ? '_blank' : ''}
                          rel={item.href ? 'noreferrer' : 'noreferrer'}
                          minWidth="11.25rem"
                          display="block"
                          variant="button"
                          color="text"
                          textTransform="capitalize"
                          fontWeight="regular"
                          py={0.625}
                          px={2}
                          sx={({
                            palette: { grey, dark },
                            borders: { borderRadius },
                          }) => ({
                            borderRadius: borderRadius.md,
                            cursor: 'pointer',
                            transition: 'all 300ms linear',
                            '&:hover': {
                              backgroundColor: grey[200],
                              color: dark.main,
                            },
                          })}
                        >
                          {item.name}
                        </MKTypography>
                      ))}
                    </Fragment>
                  ))}
                  {key !== 0 && (
                    <Divider
                      key={dividerKey}
                      orientation="vertical"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '-4px',
                        transform: 'translateY(-45%)',
                        height: '90%',
                      }}
                    />
                  )}
                </Grid>
              )
            })}
          </Grid>
        )
        // Render the dropdown menu that should be display as list items
      } else if (collapse && name === dropdownName) {
        template = collapse.map((item) => {
          const linkComponent = {
            component: MuiLink,
            href: item.href,
            target: '_blank',
            rel: 'noreferrer',
          }
          const routeComponent = {
            component: Link,
            to: item.route,
          }
          return (
            <MKTypography
              key={item.name}
              {...(item.route ? routeComponent : linkComponent)}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              variant="button"
              textTransform="capitalize"
              minWidth={item.description ? '14rem' : '12rem'}
              color={item.description ? 'dark' : 'text'}
              fontWeight={item.description ? 'bold' : 'regular'}
              py={item.description ? 1 : 0.625}
              px={2}
              sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                borderRadius: borderRadius.md,
                cursor: 'pointer',
                transition: 'all 300ms linear',
                '&:hover': {
                  backgroundColor: grey[200],
                  color: dark.main,
                  '& *': {
                    color: dark.main,
                  },
                },
              })}
              onMouseEnter={({ currentTarget }) => {
                if (item.dropdown) {
                  setNestedDropdown(currentTarget)
                  setNestedDropdownEl(currentTarget)
                  setNestedDropdownName(item.name)
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  setNestedDropdown(null)
                }
              }}
            >
              {item.description ? (
                <MKBox>
                  {item.name}
                  <MKTypography
                    display="block"
                    variant="button"
                    color="text"
                    fontWeight="regular"
                    sx={{ transition: 'all 300ms linear' }}
                  >
                    {item.description}
                  </MKTypography>
                </MKBox>
              ) : (
                item.name
              )}
              {item.collapse && (
                <Icon
                  fontSize="small"
                  sx={{
                    fontWeight: 'normal',
                    verticalAlign: 'middle',
                    mr: -0.5,
                  }}
                >
                  keyboard_arrow_right
                </Icon>
              )}
            </MKTypography>
          )
        })
      }
      return template
    })}
  </>
)

export default RenderRoutes
