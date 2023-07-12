import React from "react";
import Navbar from "../../components/navbar/navbar";
import * as S from "./styles";
import Apple from "../../components/Icons/Apple/Apple";
import GooglePlay from "../../components/Icons/GooglePlay/GooglePlay";
import ScreenShot from "../../assets/iphone.png";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <S.Content>
        <S.Header>
          <div>
            <S.Title>
              Ponemos tu sentido del olfato al servicio de la ciencia ciudadana.
            </S.Title>
            <S.Text>
              Title Mide el olor y genera datos cientificos para mejorar la
              calidad de vida de tu comunidad. ¡Descárgate la App y siente el
              poder de la ciencia colaborativa!
            </S.Text>
            <S.AppButtons>
              <button className="google-btn">
                <GooglePlay />
                <div>
                  <p> GET IT ON</p>
                  <p>Google Play</p>
                </div>
              </button>
              <button className="apple-btn">
                <Apple />
                <div>
                  <p>Download on the</p>
                  <p>Apple Store</p>
                </div>
              </button>
            </S.AppButtons>
          </div>
          <div>
            <img src={ScreenShot} alt="odour Collect app" />
          </div>
        </S.Header>
      </S.Content>
    </>
  );
};

export default LandingPage;
