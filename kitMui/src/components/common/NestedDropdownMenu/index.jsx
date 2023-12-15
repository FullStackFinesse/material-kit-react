// NestedDropdownMenu.js
import React from "react";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";

import { Box } from "@mui/material";

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
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Box ml={2.5} mt={-2.5} borderRadius="lg">
            <Box shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </Box>
          </Box>
        </Grow>
      )}
    </Popper>
  );
};

export default NestedDropdownMenu;
