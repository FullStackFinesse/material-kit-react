// DropdownMenu.js
import React from 'react'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Icon from '@mui/material/Icon'
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import { useStyles } from './dropdownMenuStyles'
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
  const classes = useStyles()
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
          setDropdown(null)
          setDropdownName('')
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
          <MKBox borderRadius="lg">
            <Icon className={classes.triangle} ref={setArrowRef}></Icon>
            <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  )
}

export default DropdownMenu
