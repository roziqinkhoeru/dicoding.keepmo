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
                  ?.filter((noteItem) => {
                    if (noteItem.archived) {
                      if (searchResult === "") {
                        return noteItem;
                      } else if (
                        noteItem.title
                          .toLowerCase()
                          .includes(searchResult.toLowerCase())
                      ) {
                        return noteItem;
                      }
                    }
                  })
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
