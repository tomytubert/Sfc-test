import styled from "styled-components";
import variables from "../../../Styles/_variables";

export const Arrow = styled.div`
  background: transparent;
  border-radius: 3px;
  height: 0px;
  position: relative;
  transition: all 0.2s ease-out 0s;
  width: 14px;
  &:before,
  &:after {
    background: black;
    border-radius: 3px;
    content: " ";
    height: 2px;
    position: absolute;
    transition: all 0.2s ease-out 0s;
    width: 100%;
  }
  &:before {
    left: 4.5px;
    transform: ${(props) =>
      props.clicked === "true" ? "rotate(-45deg)" : "rotate(45deg)"};
  }
  &:after {
    right: 4.5px;
    transform: ${(props) =>
      props.clicked === "true" ? "rotate(45deg)" : "rotate(-45deg)"};
  }
`;
