import React from "react";
import { NavbarBrand, NavbarBrandLink } from "../Navbar.elements";

const NavBrand = ({ titleBrand }) => {
  return (
    <>
      <NavbarBrand>
        <NavbarBrandLink href='/'>{titleBrand}</NavbarBrandLink>
      </NavbarBrand>
    </>
  );
};

export default NavBrand;
