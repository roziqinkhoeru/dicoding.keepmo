import React, { Component } from "react";
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
} from "./FormNote.elements";

export class FormNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    // binding
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onSubmitNotes = this.onSubmitNotes.bind(this);
  }
  onChangeTitle = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };
  onChangeNote = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };
  onSubmitNotes = (event) => {
    event.preventDefault();
    this.props.onAddHandler(this.state);
    this.setState({
      title: "",
      body: "",
    });
  };
  render() {
    return (
      <>
        <Section id='formNote'>
          <Container>
            <TitleSection className='mt-6'>Buat Catatanmu</TitleSection>
            <FormContainer>
              <Form onSubmit={this.onSubmitNotes}>
                <FormWrapper>
                  <InputGroup>
                    <input
                      className='input_field'
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Judul'
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                    />
                  </InputGroup>
                  <InputGroup>
                    <textarea
                      className='input_field'
                      name='body'
                      id='body'
                      cols='30'
                      rows='6'
                      value={this.state.body}
                      placeholder='Tulis catatanmu di sini...'
                      onChange={this.onChangeNote}
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
  }
}

export default FormNote;
