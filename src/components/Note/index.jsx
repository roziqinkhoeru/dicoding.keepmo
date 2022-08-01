import React from "react";
import { BodyNote, CardNote, DateNote, TitleNote } from "../Global.elements";
import IconNote from "./common/IconNote";

const Note = ({
  title,
  createdAt,
  body,
  archived,
  isGrid,
  id,
  archivedHandling,
  unarchivedHandling,
  deleteHandling,
}) => {
  return (
    <>
      <CardNote isGrid={isGrid}>
        <div className=''>
          <TitleNote>{title}</TitleNote>
          <DateNote>{createdAt}</DateNote>
          <BodyNote>{body}</BodyNote>
        </div>
        <IconNote
          archived={archived}
          isGrid={isGrid}
          id={id}
          archivedHandling={archivedHandling}
          unarchivedHandling={unarchivedHandling}
          deleteHandling={deleteHandling}
        />
      </CardNote>
    </>
  );
};

export default Note;
