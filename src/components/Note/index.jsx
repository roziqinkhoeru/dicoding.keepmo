import React from "react";
import {
  BodyNote,
  BtnNote,
  CardNote,
  DateNote,
  IconNote,
  TitleNote,
} from "../Global.elements";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Note = ({ title, createdAt, body, archived }) => {
  return (
    <>
      <CardNote>
        {/* <h5>{title}</h5>
          <p>{createdAt}</p>
          <p>{body}</p> */}

        <TitleNote>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </TitleNote>
        <DateNote>Kamis, 89 January 9999</DateNote>
        <BodyNote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi
          amet tempora delectus, aut harum esse quam iste fugit omnis officiis
          maxime, ratione deleniti ex quibusdam! Blanditiis repellendus non
          aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quia repudiandae dolorem ratione non ullam modi itaque incidunt
          laboriosam repellat nobis corrupti similique magnam tenetur at, nam
          voluptates vero? Eos, voluptatem!
        </BodyNote>
        <IconNote>
          {archived ? (
            <BtnNote className='public'>
              <BiArchiveOut />
              <span>Pulihkan</span>
            </BtnNote>
          ) : (
            <BtnNote className='archived'>
              <BiArchiveIn />
              <span>Arsipkan</span>
            </BtnNote>
          )}

          <BtnNote className='delete'>
            <MdDeleteOutline />
            <span>Hapus</span>
          </BtnNote>
        </IconNote>
      </CardNote>
    </>
  );
};

export default Note;
