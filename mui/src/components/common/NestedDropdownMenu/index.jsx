// NestedDropdownMenu.js
import React from 'react'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'

import MKBox from 'components/MKBox'

const NestedDropdownMenu = ({
  nestedDropdown,
  nestedDropdownEl,
  setNestedDropdown,
  setNestedDropdownName,
  renderNestedRoutes,
  setDropdown,
}) => {
  return (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl)
      }}
      onMouseLeave={() => {
        setNestedDropdown(null)
        setNestedDropdownName('')
        setDropdown(null)
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
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  )
}

export default NestedDropdownMenu
