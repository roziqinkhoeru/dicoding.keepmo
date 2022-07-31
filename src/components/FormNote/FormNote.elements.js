import styled from "styled-components";

const switchColorCount = (num) => {
  if (num === 50) {
    return "#8c90b7";
  } else if (num > 20) {
    return "#5ae6bc";
  } else if (num > 0) {
    return "#ffd337";
  } else {
    return "#ff5a5f";
  }
};

export const TitleWelcome = styled.h4`
  margin: 1.5rem 0 2rem;
`;
export const FormWrapper = styled.div`
  width: 100%;
  padding: 2.5rem 2.5rem 1.75rem;
  border-radius: 1rem;
  background-color: #755efc1a;
  /* media queries */
  @media (max-width: 960px) {
    padding: 2.5rem 2.5rem 1.75rem;
  }
  @media (max-width: 576px) {
    padding: 1.75rem 1.875rem 1.25rem;
  }
`;
export const BtnSubmitForm = styled.button`
  background-color: #5f4ffc;
  border: 1px solid transparent;
  width: 30%;
  min-width: 7.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  margin: 0 auto;
  /* hover */
  &:hover {
    background-color: #4f3efc;
  }
`;
export const BtnGroup = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.div`
  width: 60%;
  max-width: 36rem;
  margin: 0 auto 2rem;
  /* media queries */
  @media (max-width: 960px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const TitleCounting = styled.p`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > svg {
    transform: translateY(-0.7px);
    font-size: 1.25rem;
    & > * {
      color: ${({ count }) => switchColorCount(count)};
      fill: ${({ count }) => switchColorCount(count)};
    }
  }
  & > span {
    margin-left: 0.3rem;
    display: block;
    font-size: 0.875rem;
    color: ${({ count }) => switchColorCount(count)};
  }
`;
