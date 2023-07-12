import styled, { keyframes } from "styled-components";

const modalContentIn = keyframes`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
  `;

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  > div:nth-child(1) {
    align-items: center;
    display: flex;
    gap: 8px;
    p {
      color: black;
      font-size: 1.5rem;
      font-weight: 500;
      text-decoration: none;
    }
    .arrow_open {
      &:after {
        right: 4.5px;
        transform: rotate(45deg);
      }
      &:before {
        left: 4.5px;
        transform: rotate(-45deg);
      }
    }
  }
`;

export const Arrow = styled.div`
  background: transparent;
  border-radius: 3px;
  height: 0px;
  position: relative;
  width: 14px;
  &:before,
  &:after {
    background: black;
    border-radius: 3px;
    content: " ";
    height: 2px;
    position: absolute;
    width: 100%;
  }
  &:before {
    left: 4.5px;
    transform: rotate(45deg);
  }
  &:after {
    right: 4.5px;
    transform: rotate(-45deg);
  }
  .arrow_open {
    &:after {
      right: 4.5px;
      transform: rotate(45deg);
    }
    &:before {
      left: 4.5px;
      transform: rotate(-45deg);
    }
  }
`;

export const List = styled.div`
  overflow-y: hidden;
  position: absolute;
  top: 34px;
  width: auto;
  z-index: 1;
  div {
    &:before {
      background-color: transparent;
      bottom: 0;
      content: "";
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }
  ul {
    animation: ${modalContentIn} 0.25s ease-in;
    border: 1px solid black;
    list-style: none;
  }
  li {
    align-items: flex-start;
    border-bottom: 1px solid black;
    color: black;
    display: flex;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding: 12px;
    white-space: nowrap;
    &:hover {
      font-weight: 600;
    }
  }
  li:last-child {
    border-bottom: 0;
  }
`;
