import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;

  width: 100%;

  background-color: #111326;
  box-shadow: 0 3.5px 0.7px rgba(0, 0, 0, 0.025),
    0 7.2px 5.9px rgba(0, 0, 0, 0.035), 0 11.3px 15.1px rgba(0, 0, 0, 0.045),
    0 16.8px 28.9px rgba(0, 0, 0, 0.055), 0 30px 57px rgba(0, 0, 0, 0.08);
`;

export const NavbarContainer = styled.div`
  display: flex;

  max-width: 82rem;
  margin: 0 auto;
  padding: 1rem 5rem;

  align-items: center;
  justify-content: space-between;
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

export const NavbarBrand = styled.div`
  margin-right: 1rem;
`;

export const NavbarBrandLink = styled.a`
  font-size: 1.75rem;
  font-weight: 800;

  transition: all 0.2s ease-in-out;
  /* hover */
  &:hover {
    color: #8c90b7;
  }
`;

export const NavbarPreference = styled.div`
  margin-left: 1rem;
  /* unordered list child*/
  & > ul {
    display: flex;

    align-items: center;
  }
`;
export const ProfilePicContainer = styled.div`
  display: flex;

  width: 2.75rem;
  height: 2.75rem;

  cursor: pointer;

  border-radius: 50%;
  background-color: #14a697;

  align-items: center;
  justify-content: center;
  /* span child */
  & > span {
    font-weight: 800;

    letter-spacing: 0.1em;
  }
`;
