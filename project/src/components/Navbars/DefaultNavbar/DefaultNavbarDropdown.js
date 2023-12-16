import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import { Box, Typography } from "@mui/material";

const DefaultNavbarDropdown = ({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) => {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <Box
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? "greenYellow" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none", border: "1px dashed red" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <Typography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </Typography>
        <Typography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={light ? "yellow" : "dark"} ml="auto">
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle", color: "red" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </Typography>
      </Box>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
};

export default DefaultNavbarDropdown;
