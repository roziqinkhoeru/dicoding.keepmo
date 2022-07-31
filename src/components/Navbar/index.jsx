import React from "react";
import NavBrand from "./common/NavBrand";
import NavPreference from "./common/NavPreference";
import NavSearch from "./common/NavSearch";
import { NavbarContainer, Navigation } from "./Navbar.elements";

const Navbar = ({ isGrid, changeViewHandling, searchNoteHandling }) => {
  return (
    <>
      <Navigation>
        <NavbarContainer>
          <NavBrand titleBrand='Keepmo.' />
          <NavSearch searchNoteHandling={searchNoteHandling} />
          <NavPreference
            version='1.0.0'
            name='DI'
            isGrid={isGrid}
            changeViewHandling={changeViewHandling}
          />
        </NavbarContainer>
      </Navigation>
    </>
  );
};

export default Navbar;
