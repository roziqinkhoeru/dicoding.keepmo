import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  /* id archivedNote child */
  &#archiveNote {
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 82rem;
  margin: 0 auto;
  padding: 1rem 5rem;
  /* media queries */
  @media (max-width: 840px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 640px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

export const Form = styled.form`
  position: relative;
  /* id formNavSearch child */
  &#formNavSearch {
    /* media queries */
    @media (max-width: 576px) {
      position: absolute;
      top: 4rem;
      right: 0;
      left: 0;

      visibility: hidden;

      margin-bottom: 1rem;
      padding: 1rem 10% 1.375rem;

      transition: all 0.2s ease-in-out;
      transform: translateY(-1.75rem);

      opacity: 0;
      background-color: #111326;
      box-shadow: 0 3.5px 0.7px rgba(0, 0, 0, 0.025),
        0 7.2px 5.9px rgba(0, 0, 0, 0.035), 0 11.3px 15.1px rgba(0, 0, 0, 0.045),
        0 16.8px 28.9px rgba(0, 0, 0, 0.055), 0 30px 57px rgba(0, 0, 0, 0.08);
      /* showsearch child */
      &.showSearch {
        visibility: visible;

        transform: translateY(0);

        opacity: 1;
      }
    }
  }
  /* btn search child */
  & .btn_search {
    position: absolute;
    top: 0.7rem;
    left: 1.25rem;

    padding: 0;

    border: none;
    outline: none;
    background-color: transparent;
    /* all child */
    & * {
      font-size: 1.125rem;

      color: #8c90b7;
    }
    /* media quries */
    @media (max-width: 576px) {
      top: 1.7rem;
      left: 13%;
    }
    @media (max-width: 400px) {
      left: 14%;
    }
  }
`;

export const TitleSection = styled.h2`
  margin-bottom: 1.5rem;

  text-decoration: underline;

  text-underline-offset: 0.375rem;
`;

export const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  /* media queries */
  @media (max-width: 576px) {
    margin-bottom: 0.875rem;
  }
`;

export const NoteContainer = styled.div`
  display: grid;

  width: 100%;

  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
`;

export const CardNote = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 1.75rem 1.5rem 1rem;

  transition: all 0.2s ease-in-out;

  border: 1px solid transparent;
  border-radius: 1rem;
  background-color: #181c36;

  grid-column: ${({ isGrid }) =>
    isGrid ? "span 3 / span 3" : "span 12 / span 12"};
  justify-content: space-between;
  /* hover */
  &:hover {
    border: 1px solid #5e4dfa99;
    box-shadow: 0 1px 2.8px rgba(0, 0, 0, 0.077),
      0 2.8px 7.8px rgba(0, 0, 0, 0.11), 0 6.6px 18.7px rgba(0, 0, 0, 0.143),
      0 22px 62px rgba(0, 0, 0, 0.22);
    /* div last child */
    & > div:last-child {
      visibility: visible;

      transition: visibility 0s linear 0s, opacity 300ms;

      opacity: 1;
    }
  }
  /* media queries */
  @media (max-width: 1200px) {
    grid-column: ${({ isGrid }) =>
      isGrid ? "span 4 / span 4" : "span 12 / span 12"};
  }
  @media (max-width: 960px) {
    grid-column: ${({ isGrid }) =>
      isGrid ? "span 6 / span 6" : "span 12 / span 12"};
  }
  @media (max-width: 520px) {
    grid-column: span 12 / span 12;
  }
`;

export const TitleNote = styled.h5`
  display: -webkit-box;
  overflow: hidden;

  margin-bottom: 0.5rem;

  text-overflow: ellipsis;

  line-clamp: 2;
  -webkit-line-clamp: 2;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
`;

export const BodyNote = styled.p`
  display: -webkit-box;
  overflow: hidden;

  margin-bottom: 1.5rem;

  text-overflow: ellipsis;

  color: #ffffffb3;

  line-clamp: 50;
  -webkit-line-clamp: 50;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
`;

export const DateNote = styled.p`
  font-size: 0.875rem;

  margin-bottom: 0.875rem;

  color: #8c90b7;
`;

export const IconsNote = styled.div`
  display: flex;
  visibility: hidden;

  margin-bottom: 0.5rem;

  transition: visibility 0s linear 300ms, opacity 300ms;

  opacity: 0;

  align-items: center;
  justify-content: ${({ isGrid }) => (isGrid ? "space-between" : "flex-end")};
`;

export const BtnNote = styled.button`
  display: flex;

  padding: 0.375rem 0.875rem 0.375rem 0.75rem;

  transition: all 0.2s ease-in-out;

  border: 1px solid transparent;
  border-radius: 9999px;
  outline: none;
  background-color: #755efc33;

  align-items: center;
  /* BtnNote last child */
  &:last-child {
    margin-left: ${({ isGrid }) => (isGrid ? "0" : "1rem")};
  }
  /* span child */
  & > span {
    font-size: 0.875rem;
  }
  /* svg child */
  & > svg {
    font-size: 0.875rem;
    margin-right: 0.3rem;
  }
  /* BtnNote with class delete */
  &.delete {
    background-color: #ff525224;
    /* on hover */
    &:hover {
      border: 1px solid #ff5252e6;
    }
    /* span child */
    & > span {
      color: #ff5252;
    }
    /* svg chlid */
    & > svg {
      font-size: 1rem;
    }
    /* all child of svg */
    & > svg * {
      color: #ff5252;
    }
  }
  /* BtnNote with class archived */
  &.archived {
    background-color: #ffd33724;
    /* on hover */
    &:hover {
      border: 1px solid #ffd337e6;
    }
    /* svg child with all child of svg */
    & > span,
    & > svg * {
      color: #ffd337;
    }
  }
  /* BtnNote with class public */
  &.public {
    background-color: #5ae6bc24;
    /* on hover */
    &:hover {
      border: 1px solid #5ae6bce6;
    }
    /* svg child with all child of svg */
    & > span,
    & > svg * {
      color: #5ae6bc;
    }
  }
`;
