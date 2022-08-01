import React from "react";
import { FiSearch } from "react-icons/fi";
import { Form } from "../../Global.elements";

const NavSearch = ({ searchNoteHandling, isShowOnClick }) => {
  return (
    <>
      <div>
        <Form
          id='formNavSearch'
          className={`${isShowOnClick ? "showSearch" : ""}`}
        >
          <button
            className='btn_search'
            onClick={(event) => event.preventDefault()}
          >
            <FiSearch />
          </button>
          <input
            className='input_field search'
            type='text'
            placeholder='Search'
            name='searchNav'
            id='searchNav'
            onChange={searchNoteHandling}
          />
        </Form>
      </div>
    </>
  );
};

export default NavSearch;
