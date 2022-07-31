import React from "react";
import {
  Container,
  Form,
  InputGroup,
  Section,
  TitleSection,
} from "../Global.elements";
import {
  BtnGroup,
  BtnSubmitForm,
  FormContainer,
  FormWrapper,
  TitleWelcome,
} from "./FormNote.elements";

const FormNote = () => {
  return (
    <>
      <Section id='formNote'>
        <Container>
          <TitleWelcome>Selamat Datang 👋</TitleWelcome>
          <FormContainer>
            <Form>
              <FormWrapper>
                <TitleSection>Buat Catatanmu</TitleSection>
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
                    rows='6'
                    placeholder='Tulis catatanmu di sini...'
                  ></textarea>
                </InputGroup>
                <BtnGroup>
                  <BtnSubmitForm type='submit'>Buat</BtnSubmitForm>
                </BtnGroup>
              </FormWrapper>
            </Form>
          </FormContainer>
        </Container>
      </Section>
    </>
  );
};

export default FormNote;
