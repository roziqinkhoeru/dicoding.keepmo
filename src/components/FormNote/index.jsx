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
  TitleCounting,
} from "./FormNote.elements";
import { IoInfiniteSharp } from "react-icons/io5";
import { BsCheck, BsExclamation } from "react-icons/bs";

export class FormNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleCount: 50,
      titleCountIcon: <></>,
    };

    // binding
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onSubmitNotes = this.onSubmitNotes.bind(this);
    this.onChangeIconCount = this.onChangeIconCount.bind(this);
  }

  onChangeTitle = (event) => {
    event.preventDefault();
    if (event.target.value.length > 50) {
      this.setState({
        title: event.target.value.substring(0, 50),
        titleCount: 0,
      });
    } else {
      this.setState({
        title: event.target.value,
        titleCount: 50 - event.target.value.length,
      });
    }
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
      titleCount: 50,
    });
  };

  onChangeIconCount = () => {
    if (this.state.titleCount === 50) {
      return {
        titleCountIcon: <IoInfiniteSharp />,
      };
    } else if (this.state.titleCount > 20) {
      return {
        titleCountIcon: <BsCheck />,
      };
    } else {
      return {
        titleCountIcon: <BsExclamation />,
      };
    }
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
                  <TitleCounting count={this.state.titleCount}>
                    {this.onChangeIconCount().titleCountIcon}
                    <span>Sisa karakter: {this.state.titleCount}</span>
                  </TitleCounting>
                  <InputGroup>
                    <input
                      className='input_field'
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Judul'
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      required
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
