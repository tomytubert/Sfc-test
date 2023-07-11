import React from "react";
import HomeButton from "../../components/homeButtons/homeButton";
import {
  CenterContainer,
  Title,
  ButtonsContainer,
} from "../../Styles/homeStyles";

const Home = () => {
  return (
    <>
      <CenterContainer>
        <Title>
          Tomás Tubert González <span>SFC TEST</span>
        </Title>
        <ButtonsContainer>
          <HomeButton href="/landing-page" text={"Landing Page"} />
          <HomeButton href="/odour-inputs" text={"Odour Inputs"} />
        </ButtonsContainer>
      </CenterContainer>
    </>
  );
};

export default Home;
