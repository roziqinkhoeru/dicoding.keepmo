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
  return (
    <>
      <Section id='publicNote'>
        <Container>
          <Wrapper>
            <TitleSection>Catatanmu</TitleSection>
            <NoteContainer>
              {notes?.length === 0 ? (
                <EmptyNote />
              ) : (
                notes
                  ?.filter((noteItem) => {
                    if (noteItem.archived === false) {
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

export default PublicNote;
