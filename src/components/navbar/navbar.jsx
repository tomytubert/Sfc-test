import React from "react";
import * as S from "./styles";
import DropDown from "../dropDown/DropDown";

const Navbar = () => {
  const recursos_links = [
    { text: "OdourObservatory", href: "#" },
    { text: "D-NOSES", href: "#" },
    { text: "Sience for Change", href: "#" },
  ];
  const lenguage_links = [
    { text: "Castellano", href: "#" },
    { text: "Inglés", href: "#" },
  ];

  return (
    <>
      <S.Nav>
        <div>
          <div>
            <img
              src="./Proposal Wireframes_OdourCollect Logo.svg"
              alt="Odour Collect Logo"
            />
          </div>
          <div>
            <S.Links>
              <li>
                <a href="/landing-page">Sobre nosotros</a>
              </li>
              <li>
                <a href="/landing-page">Mapa</a>
              </li>
              <li className="dropDown">
                <DropDown links={recursos_links} text={"Recursos"} />
              </li>
              <li>
                <a href="/landing-page">Blog</a>
              </li>
              <li id="lenguage" className="dropDown">
                <DropDown links={lenguage_links} text={"Castellano"} />
              </li>
            </S.Links>
          </div>
        </div>
      </S.Nav>
    </>
  );
};

export default Navbar;
