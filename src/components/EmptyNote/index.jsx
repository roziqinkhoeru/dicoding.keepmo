import React from "react";
import {
  EmptyNoteBody,
  EmptyNoteTitle,
  EmptyNoteWrapper,
} from "./EmptyNote.elements";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineStickyNote2 } from "react-icons/md";

const EmptyNote = ({ isArchived }) => {
  return (
    <>
      <EmptyNoteWrapper>
        <EmptyNoteBody>
          {isArchived ? <BiArchiveIn /> : <MdOutlineStickyNote2 />}
          <EmptyNoteTitle>
            Tidak ada catatan{isArchived && " di arsip"}
          </EmptyNoteTitle>
        </EmptyNoteBody>
      </EmptyNoteWrapper>
    </>
  );
};

export default EmptyNote;
