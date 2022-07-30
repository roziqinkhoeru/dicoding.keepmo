import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineViewDay, MdOutlineGridView } from "react-icons/md";
import { NavbarPreference, ProfilePicContainer } from "../Navbar.elements";

const NavPreference = ({ version, name, isGrid }) => {
  return (
    <>
      <NavbarPreference>
        <ul>
          <li className='nav_preference_item'>
            <div className='preference_icon'>
              {isGrid ? <MdOutlineViewDay /> : <MdOutlineGridView />}
            </div>
          </li>
          <li className='nav_preference_item'>
            <div className='preference_icon'>
              <IoSettingsOutline />
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
