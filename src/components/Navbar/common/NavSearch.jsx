import React from "react";
import { FiSearch } from "react-icons/fi";
import { Form } from "../Navbar.elements";

const NavSearch = () => {
  return (
    <>
      <div>
        <Form>
          <button type='submit' className='btn_search'>
            <FiSearch />
          </button>
          <input
            className='input_field search'
            type='text'
            placeholder='Search'
          />
        </Form>
      </div>
    </>
  );
};

export default NavSearch;
