import React, { useState } from "react";
import { List, Container } from "./styles";
import DropDownArrow from "../Icons/DropDownArrow/DropDownArrow";

const DropDown = ({ links, text }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleOpenList = () => {
    setIsListOpen(!isListOpen);
  };

  console.log("listOpen", isListOpen);

  return (
    <>
      <Container>
        <div onClick={() => handleOpenList()}>
          <p>{text}</p>
          <DropDownArrow clicked={isListOpen.toString()} />
        </div>
        <List>
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
        </List>
      </Container>
    </>
  );
};

export default DropDown;
