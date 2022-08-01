import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineViewDay, MdOutlineGridView } from "react-icons/md";
import { NavbarPreference, ProfilePicContainer } from "../Navbar.elements";
import { FiSearch } from "react-icons/fi";

const NavPreference = ({
  version,
  name,
  isGrid,
  changeViewHandling,
  showNavSearchHandling,
}) => {
  return (
    <>
      <NavbarPreference>
        <ul>
          <li className='nav_preference_item' onClick={changeViewHandling}>
            {isGrid ? (
              <div className='preference_icon list_view'>
                <MdOutlineViewDay />
              </div>
            ) : (
              <div className='preference_icon grid_view'>
                <MdOutlineGridView />
              </div>
            )}
          </li>
          <li className='nav_preference_item'>
            <div className='preference_icon'>
              <IoSettingsOutline />
            </div>
          </li>
          <li className='nav_preference_item' onClick={showNavSearchHandling}>
            <div className='preference_icon'>
              <FiSearch />
            </div>
          </li>
          <li className='nav_preference_item'>
            <span>v{version}</span>
          </li>
          <li className='nav_preference_item'>
            <ProfilePicContainer>
              <span>{name}</span>
            </ProfilePicContainer>
          </li>
        </ul>
      </NavbarPreference>
    </>
  );
};

export default NavPreference;
