import React from "react";
import {
  Container,
  Form,
  InputGroup,
  Section,
  TitleSection,
} from "../Global.elements";
import { TitleWelcome } from "./FormNote.elements";

const FormNote = () => {
  return (
    <>
      <Section id='formNote'>
        <Container>
          <TitleWelcome>Selamat Datang 👋</TitleWelcome>
          <div className=''>
            <TitleSection>Buat Catatanmu</TitleSection>
            <Form>
              <InputGroup>
                <input
                  className='input_field'
                  type='text'
                  name='judul'
                  id='judul'
                  placeholder='Judul'
                />
              </InputGroup>
              <InputGroup>
                <textarea
                  className='input_field'
                  name='catatan'
                  id='catatan'
                  cols='30'
                  rows='5'
                  placeholder='Tulis catatanmu di sini...'
                ></textarea>
              </InputGroup>
              <button type='submit'>Buat</button>
            </Form>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FormNote;
