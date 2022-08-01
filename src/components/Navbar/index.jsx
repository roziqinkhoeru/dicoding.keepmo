import React from "react";
import NavBrand from "./common/NavBrand";
import NavPreference from "./common/NavPreference";
import NavSearch from "./common/NavSearch";
import { NavbarContainer, Navigation } from "./Navbar.elements";

const Navbar = ({
  isGrid,
  changeViewHandling,
  searchNoteHandling,
  showNavSearchHandling,
  isShowOnClick,
}) => {
  return (
    <>
      <Navigation>
        <NavbarContainer>
          <NavBrand titleBrand='Keepmo.' />
          <NavSearch
            searchNoteHandling={searchNoteHandling}
            isShowOnClick={isShowOnClick}
          />
          <NavPreference
            version='1.0.0'
            name='DI'
            isGrid={isGrid}
            changeViewHandling={changeViewHandling}
            showNavSearchHandling={showNavSearchHandling}
          />
        </NavbarContainer>
      </Navigation>
    </>
  );
};

export default Navbar;
