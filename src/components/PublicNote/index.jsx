import React from "react";
import {
  Section,
  Container,
  TitleSection,
  Wrapper,
  NoteContainer,
} from "../Global.elements";
import Note from "../Note";

const PublicNote = () => {
  return (
    <>
      <Section id='publicNote'>
        <Container>
          <Wrapper>
            <TitleSection>Catatanmu</TitleSection>
            <NoteContainer>
              <Note archived={false} />
              <Note archived={false} />
              <Note archived={false} />
              <Note archived={true} />
            </NoteContainer>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default PublicNote;
