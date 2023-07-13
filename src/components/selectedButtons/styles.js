import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #8080808c;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 10px;
  background: ${(props) =>
    props.clicked === "true" ? "#ffa50036" : "transparent"};
  color: grey;
  &:hover {
    color: #8080808c;
    background: #ffa50036;
  }
`;
