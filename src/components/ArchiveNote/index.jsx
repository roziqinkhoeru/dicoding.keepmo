import React from "react";
import {
  NoteContainer,
  Container,
  Section,
  TitleSection,
  Wrapper,
} from "../Global.elements";
import Note from "../Note";

const ArchiveNote = () => {
  return (
    <>
      <Section id='archiveNote'>
        <Container>
          <Wrapper>
            <TitleSection>Arsip</TitleSection>
            <NoteContainer>
              <Note />
            </NoteContainer>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default ArchiveNote;
