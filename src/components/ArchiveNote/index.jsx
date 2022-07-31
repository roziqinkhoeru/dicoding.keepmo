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

import { showFormattedDate } from "../../utilities";

const ArchiveNote = ({
  notes,
  isGrid,
  archivedHandling,
  unarchivedHandling,
  deleteHandling,
  searchResult,
}) => {
  const archivedNotes = notes
    ?.filter((noteItem) => noteItem.archived)
    ?.filter((noteItem) =>
      noteItem.title.toLowerCase().includes(searchResult.toLowerCase())
    );
  return (
    <>
      <Section id='archiveNote'>
        <Container>
          <Wrapper>
            <TitleSection>Arsip</TitleSection>
            <NoteContainer>
              {archivedNotes.length === 0 ? (
                <EmptyNote isArchived={true} />
              ) : (
                archivedNotes
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

export default ArchiveNote;
