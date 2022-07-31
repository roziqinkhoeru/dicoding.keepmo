import styled from "styled-components";

export const EmptyNoteWrapper = styled.div`
  width: 100%;
  grid-column: span 12 / span 12;
  padding: 3rem 0.5rem 2rem;
`;

export const EmptyNoteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    font-size: 6rem;
    margin-bottom: 1.25rem;
    /* media queries */
    @media (max-width: 576px) {
      font-size: 5rem;
    }
    & * {
      color: #8c90b780;
    }
  }
`;

export const EmptyNoteTitle = styled.h5`
  color: #8c90b7b3;
  font-weight: 600;
  /* media queries */
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;
