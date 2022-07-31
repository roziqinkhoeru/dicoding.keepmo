import React from "react";
import Note from "../Note";
import EmptyNote from "../EmptyNote";
import {
  Section,
  Container,
  TitleSection,
  Wrapper,
  NoteContainer,
} from "../Global.elements";

import { showFormattedDate } from "../../utilities";

const PublicNote = ({
  notes,
  isGrid,
  archivedHandling,
  unarchivedHandling,
  deleteHandling,
  searchResult,
}) => {
  const publicNotes = notes
    ?.filter((noteItem) => noteItem.archived === false)
    ?.filter((noteItem) =>
      noteItem.title.toLowerCase().includes(searchResult.toLowerCase())
    );
  return (
    <>
      <Section id='publicNote'>
        <Container>
          <Wrapper>
            <TitleSection>Catatanmu</TitleSection>
            <NoteContainer>
              {publicNotes.length === 0 ? (
                <EmptyNote isArchived={false} />
              ) : (
                publicNotes
                  ?.sort((a, b) => (a.id > b.id ? -1 : 1))
                  ?.map((noteItem) => {
                    return (
                      <Note
                        key={noteItem.id}
                        archivedHandling={archivedHandling}
                        unarchivedHandling={unarchivedHandling}
                        deleteHandling={deleteHandling}
                        isGrid={isGrid}
                        {...noteItem}
                        createdAt={showFormattedDate(noteItem.createdAt)}
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

export default PublicNote;
