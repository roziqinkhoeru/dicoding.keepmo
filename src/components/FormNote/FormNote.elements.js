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
  box-shadow: 0 4px 2.8px -1px rgba(0, 0, 0, 0.056),
    0 7.7px 6.7px -1px rgba(0, 0, 0, 0.081),
    0 12.2px 12.5px -1px rgba(0, 0, 0, 0.1),
    0 18.3px 22.3px -1px rgba(0, 0, 0, 0.119),
    0 27.9px 41.8px -1px rgba(0, 0, 0, 0.144),
    0 50px 100px -1px rgba(0, 0, 0, 0.2);

  /* media queries */
  @media (max-width: 960px) {
    padding: 2.5rem 2.5rem 1.75rem;
  }
  @media (max-width: 576px) {
    padding: 1.75rem 1.875rem 1.25rem;
  }
`;

export const BtnSubmitForm = styled.button`
  font-weight: 600;

  width: 30%;
  min-width: 7.5rem;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;

  transition: all 0.2s ease-in-out;

  border: 1px solid transparent;
  border-radius: 9999px;
  background-color: #5f4ffc;
  /* hover */
  &:hover {
    background-color: #4f3efc;
  }
`;

export const BtnGroup = styled.div`
  display: flex;

  width: 100%;
  margin: 0 auto;

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
  display: flex;

  margin-bottom: 0.75rem;

  align-items: center;
  justify-content: flex-end;
  /* scg child */
  & > svg {
    font-size: 1.25rem;

    transform: translateY(-0.7px);
    /* all child */
    & > * {
      color: ${({ count }) => switchColorCount(count)};
      fill: ${({ count }) => switchColorCount(count)};
    }
  }
  /* span child */
  & > span {
    font-size: 0.875rem;

    display: block;

    margin-left: 0.3rem;

    color: ${({ count }) => switchColorCount(count)};
  }
`;
