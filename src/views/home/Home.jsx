import React from "react";
import HomeButton from "../../components/homeButtons/homeButton";
import * as S from "./styles";

const Home = () => {
  return (
    <>
      <S.CenterContainer>
        <S.Title>
          Tomás Tubert González <span>SFC TEST</span>
        </S.Title>
        <S.ButtonsContainer>
          <HomeButton href="/landing-page" text={"Landing Page"} />
          <HomeButton href="/odour-inputs" text={"Odour Inputs"} />
        </S.ButtonsContainer>
      </S.CenterContainer>
    </>
  );
};

export default Home;
