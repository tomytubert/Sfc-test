import styled from "styled-components";
import BImage from "../../assets/OCGradienteLookAndFeel.png";
import variables from "../../Styles/_variables";

export const Content = styled.main`
  background-image: url(${BImage});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  min-height: 100vh;
  place-content: center;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  margin-top: 150px;
  padding: 60px;
  > * {
    flex: 1;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  > div:last-child {
    display: flex;
    justify-content: center;
  }
  img {
    filter: drop-shadow(0 16px 20px black);
    object-fit: cover;
    max-height: 650px;
  }
`;

export const Title = styled.h1`
  color: black;
  font-family: ${variables.font.title};
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 4.5rem;
`;

export const Text = styled.p`
  color: ${variables.colors.black};
  font-family: ${variables.font.title};
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const AppButtons = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  button {
    align-items: center;
    background: black;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    padding: 5px 10px;
    svg {
      height: 1.5rem;
      width: 1.5rem;
      path {
        fill: white;
      }
    }
    p {
      text-align: left;
    }
    p:first-child {
      font-size: 12px;
    }
    p:last-child {
      font-size: 1.5rem;
    }
  }
`;
