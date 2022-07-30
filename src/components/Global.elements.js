import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 82rem;
  padding: 1rem 5rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

export const Form = styled.form`
  position: relative;
  & .btn_search {
    position: absolute;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    top: 0.7rem;
    left: 1.25rem;
    & * {
      font-size: 1.125rem;
      color: #8c90b7;
    }
  }
`;

export const TitleSection = styled.h2`
  margin-bottom: 1.5rem;
`;

export const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`;
export const NoteContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
`;
export const CardNote = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.75rem 1.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid transparent;
  background-color: #181c36;
  grid-column: span 1 / span 1;
  transition: all 0.2s ease-in-out;
  /* hover */
  &:hover {
    border: 1px solid #5e4dfa99;
    box-shadow: 0px 1px 2.8px rgba(0, 0, 0, 0.077),
      0px 2.8px 7.8px rgba(0, 0, 0, 0.11), 0px 6.6px 18.7px rgba(0, 0, 0, 0.143),
      0px 22px 62px rgba(0, 0, 0, 0.22);

    & > div:last-child {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
    }
  }
`;
export const TitleNote = styled.h5`
  margin-bottom: 0.5rem;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BodyNote = styled.p`
  margin-bottom: 1.5rem;
  line-clamp: 15;
  -webkit-line-clamp: 15;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffffb3;
`;
export const DateNote = styled.p`
  font-size: 0.875rem;
  color: #8c90b7;
  margin-bottom: 0.875rem;
`;
export const IconNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
`;
export const BtnNote = styled.button`
  border: 1px solid transparent;
  background-color: #755efc33;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0.375rem 0.875rem 0.375rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;
  & > span {
    font-size: 0.875rem;
  }
  & > svg {
    font-size: 0.875rem;
    margin-right: 0.3rem;
  }
  &.delete {
    background-color: #ff525224;
    &:hover {
      border: 1px solid #ff5252e6;
    }
    & > span {
      color: #ff5252;
    }
    & > svg * {
      color: #ff5252;
    }
    & > svg {
      font-size: 1rem;
    }
  }
  &.archived {
    background-color: #ffd33724;
    &:hover {
      border: 1px solid #ffd337e6;
    }
    & > span,
    & > svg * {
      color: #ffd337;
    }
  }
  &.public {
    background-color: #5ae6bc24;
    &:hover {
      border: 1px solid #5ae6bce6;
    }
    & > span,
    & > svg * {
      color: #5ae6bc;
    }
  }
`;