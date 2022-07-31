import React from "react";
import EmptyNote from "../EmptyNote";
import {
  NoteContainer,
  Container,
  Section,
  TitleSection,
  Wrapper,
} from "../Global.elements";
import Note from "../Note";

const ArchiveNote = ({
  notes,
  isGrid,
  archivedHandling,
  unarchivedHandling,
  deleteHandling,
}) => {
  return (
    <>
      <Section id='archiveNote'>
        <Container>
          <Wrapper>
            <TitleSection>Arsip</TitleSection>
            <NoteContainer>
              {notes?.length === 0 ? (
                <EmptyNote />
              ) : (
                notes
                  ?.filter((noteItem) => noteItem.archived)
                  ?.map((noteItem) => {
                    return (
                      <Note
                        key={noteItem.id}
                        archivedHandling={archivedHandling}
                        unarchivedHandling={unarchivedHandling}
                        deleteHandling={deleteHandling}
                        isGrid={isGrid}
                        {...noteItem}
                      />
                    );
                  })
              )}
            </NoteContainer>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default ArchiveNote;
