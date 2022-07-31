import React from "react";

import { IconsNote, BtnNote } from "../../Global.elements";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const IconNote = ({
  archived,
  isGrid,
  unarchivedHandling,
  archivedHandling,
  deleteHandling,
  id,
}) => {
  return (
    <>
      <IconsNote isGrid={isGrid}>
        {archived ? (
          <BtnNote
            className='public'
            isGrid={isGrid}
            onClick={() => unarchivedHandling(id)}
          >
            <BiArchiveOut />
            <span>Pulihkan</span>
          </BtnNote>
        ) : (
          <BtnNote
            className='archived'
            isGrid={isGrid}
            onClick={() => archivedHandling(id)}
          >
            <BiArchiveIn />
            <span>Arsipkan</span>
          </BtnNote>
        )}
        <BtnNote
          className='delete'
          isGrid={isGrid}
          onClick={() => deleteHandling(id)}
        >
          <MdDeleteOutline />
          <span>Hapus</span>
        </BtnNote>
      </IconsNote>
    </>
  );
};

export default IconNote;
