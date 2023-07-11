import styled from "styled-components";
import variables from "../../Styles/_variables"

export const Button = styled.a`
  border: none;
  background: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  cursor:pointer;
  color: ${variables.colors.black};
  text-decoration:none; 
  &:hover,&:active{
    text-decoration:underline; 
    color: ${variables.colors.red};
  }
`;
