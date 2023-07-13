import styled from "styled-components";
import variables from "../../Styles/_variables";

export const CenterContainer = styled.section`
  color: ${variables.colors.black};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: ${variables.font.title};
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
