import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  background-color: #111326;
`;
export const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 82rem;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  & > ul {
    display: flex;
    align-items: center;
  }
`;
export const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: #14a697;
  cursor: pointer;

  & > span {
    font-weight: 800;
    letter-spacing: 0.1em;
  }
`;
