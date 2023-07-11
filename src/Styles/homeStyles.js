import styled from "styled-components";
import variables from "../Styles/_variables"

export const CenterContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${variables.colors.black}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3.5rem;
  text-align: center;
  span {
    display: block;
    font-size: 8.5rem;
  }
  @media only screen and (max-width: 456px) {
    font-size: 2rem;
    span {
      font-size: 5rem;
    }
  }
`;
