import React from "react";
import { Nav, Links } from "./styles";
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
      <Nav>
        <div>
          <div>
            <img
              src="./Proposal Wireframes_OdourCollect Logo.svg"
              alt="Odour Collect Logo"
            />
          </div>
          <div>
            <Links>
              <li>
                <a href="/landing-page">Sobre nosotros</a>
              </li>
              <li>
                <a href="/landing-page">Mapa</a>
              </li>
              <li className="dropDown">
                <DropDown links={recursos_links} text={"Recursos"}/>
              </li>
              <li>
                <a href="/landing-page">Blog</a>
              </li>
              <li className="dropDown">
                <DropDown links={lenguage_links} text={"Castellano"}/>
              </li>
            </Links>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
