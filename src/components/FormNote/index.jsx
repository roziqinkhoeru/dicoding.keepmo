import React from "react";
import { FormNoteContainer, FormNoteSection } from "./FormNote.elements";

const FormNote = () => {
  return (
    <>
      <FormNoteSection>
        <FormNoteContainer>
          <h3>Selamat Datang 👋</h3>
          <div className=''>
            <h1>Buat Catatanmu</h1>
            <form>
              <div className=''>
                <input
                  type='text'
                  name='judul'
                  id='judul'
                  placeholder='Judul'
                />
              </div>
              <div className=''>
                <textarea
                  name='catatan'
                  id='catatan'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
            </form>
          </div>
        </FormNoteContainer>
      </FormNoteSection>
    </>
  );
};

export default FormNote;
