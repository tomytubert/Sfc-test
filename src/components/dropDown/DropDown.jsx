import React, { useState } from "react";
import * as S from "./styles";
import DropDownArrow from "../Icons/DropDownArrow/DropDownArrow";

const DropDown = ({ links, text }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleOpenList = () => {
    setIsListOpen(!isListOpen);
  };

  console.log("listOpen", isListOpen);

  return (
    <>
      <S.Container>
        <div onClick={() => handleOpenList()}>
          <p>{text}</p>
          <DropDownArrow clicked={isListOpen.toString()} />
        </div>
        <S.List>
          {isListOpen && (
            <div onClick={() => handleOpenList()}>
              {isListOpen && (
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.text}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </S.List>
      </S.Container>
    </>
  );
};

export default DropDown;
