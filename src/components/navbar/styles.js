import styled from "styled-components";
import variables from "../../Styles/_variables";

export const Nav = styled.nav`
  background: transparent;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
  >div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    div:nth-child(1) {
      flex: 1;
    }
    div:nth-child(2) {
      flex: 2;
    }
  }
  img {
    width: 100%;
    max-width: 250px;
  }
`;

export const Links = styled.ul`
  display: flex;
  font-family: ${variables.font.title};
  justify-content: space-between;
  list-style: none;
  a {
    color: ${variables.colors.black};
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: ${variables.colors.red};
      text-decoration: underline;
    }
  }
  .dropDown {
    align-items: center;
    display: flex;
    gap: 8px;
  }
`;
