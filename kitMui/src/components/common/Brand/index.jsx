// components/NavbarBrand.jsx
import React from "react";
import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";

const Brand = ({ brand, transparent, light }) => (
  <Link to="/" style={{ lineHeight: 1, textDecoration: "none" }}>
    <MKTypography
      variant="button"
      fontWeight="bold"
      color={light ? "white" : "dark"}
      py={transparent ? 1.5 : 0.75}
      pl={transparent ? 0 : { xs: 0, lg: 1 }}
    >
      {brand}
    </MKTypography>
  </Link>
);

export default Brand;
